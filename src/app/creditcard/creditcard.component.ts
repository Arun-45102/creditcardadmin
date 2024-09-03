import { Component, ViewChild } from '@angular/core';
import { CreditCard } from '../models/credit-card';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { CreditcardsService } from '../services/creditcards.service';

@Component({
  selector: 'app-creditcard',
  templateUrl: './creditcard.component.html',
  styleUrls: ['./creditcard.component.scss'],
})
export class CreditcardComponent {
  creditcards: CreditCard[] = [];

  creditCardMaximumAmount: number = 0;

  constructor(private creditcardsService: CreditcardsService) {
    this.creditcardsService.getCreditCards().subscribe((data: CreditCard[]) => {
      this.creditcards = data;
      this.dataSource = new MatTableDataSource(this.creditcards);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.calculateMetrics();
    });
  }

  dataSource = new MatTableDataSource(this.creditcards);

  displayColumns = [
    'select',
    'id',
    'name',
    'description',
    'bankName',
    'maxCredit',
    'interestRate',
    'active',
    'recommendedScore',
    'action',
  ];

  selection = new SelectionModel(true, []);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  selectHandler(row: CreditCard) {
    this.selection.toggle(row as never);
  }

  calculateMetrics() {
    this.creditCardMaximumAmount = this.creditcards.filter(
      (card) => card.maxCredit > 3000
    ).length;
  }
}
