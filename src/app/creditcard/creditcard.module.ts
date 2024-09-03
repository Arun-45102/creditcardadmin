import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreditcardRoutingModule } from './creditcard-routing.module';
import { CreditcardComponent } from './creditcard.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';

import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    CreditcardComponent,
    AddComponent,
    ViewComponent,
    EditComponent,
    DeleteComponent,
  ],
  imports: [
    CommonModule,
    CreditcardRoutingModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatIconModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ],
})
export class CreditcardModule {}
