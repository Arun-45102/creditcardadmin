import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { CreditcardsService } from 'src/app/services/creditcards.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss'],
})
export class DeleteComponent {
  creditCardId!: Number;

  private destroy$: Subject<void> = new Subject<void>();
  constructor(
    private route: Router,
    private router: ActivatedRoute,
    private creditCardService: CreditcardsService,
    private matSnackBar: MatSnackBar
  ) {
    this.creditCardId = parseInt(this.router.snapshot.paramMap.get('id') || '');
    this.creditCardService
      .deleteCreditCard(this.creditCardId)
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        this.showSuccessMessage('Credit Card Deleted Successfully');
        this.route.navigate(['creditcards']);
      });
  }

  showSuccessMessage(message: string) {
    this.matSnackBar.open(message, 'Close', {
      duration: 3000,
      horizontalPosition: 'end',
      verticalPosition: 'top',
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
