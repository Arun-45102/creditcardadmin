import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { CreditCard } from 'src/app/models/credit-card';
import { CreditcardsService } from 'src/app/services/creditcards.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class ViewComponent {
  creditCardDetails!: CreditCard;
  creditCardId!: Number;

  private destroy$: Subject<void> = new Subject<void>();

  constructor(
    private creditCardService: CreditcardsService,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {
    this.creditCardId = parseInt(this.route.snapshot.paramMap.get('id') || '');
    this.creditCardService
      .getCreditCardById(this.creditCardId)
      .pipe(takeUntil(this.destroy$))
      .subscribe((data: CreditCard) => {
        this.creditCardDetails = data;
        this.showSuccessMessage('Credit Card Loaded Successfully');
      });
  }

  showSuccessMessage(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
