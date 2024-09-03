import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CreditCard } from 'src/app/models/credit-card';
import { CreditcardsService } from 'src/app/services/creditcards.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent {
  private subscription: Subscription | undefined;

  constructor(
    private creditCardService: CreditcardsService,
    private router: Router
  ) {}

  newCreditCard: CreditCard = {
    id: undefined,
    name: '',
    bankName: '',
    description: '',
    maxCredit: 5000,
    interestRate: 12,
    active: true,
    recommendedScore: '100-500',
    annualFee: 12,
    termsAndConditions: 'Bla Bla Bla',
    createdDate: Date(),
    updatedDate: Date(),
  };

  saveCreditCard() {
    this.subscription = this.creditCardService
      .createCreditCard(this.newCreditCard)
      .subscribe((data) => {
        alert('Credit Card Added');
        this.router.navigate(['creditcards']);
      });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
