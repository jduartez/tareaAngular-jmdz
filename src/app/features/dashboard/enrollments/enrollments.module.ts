import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnrollmentsRoutingModule } from './enrollments-routing.module';
import { EnrollmentsComponent } from './enrollments.component';
import { EnrollmentsDialogComponent } from './components/enrollments-dialog/enrollments-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    EnrollmentsComponent,
    EnrollmentsDialogComponent
  ],
  imports: [
    CommonModule,
    EnrollmentsRoutingModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatFormField,
    MatInputModule,
    ReactiveFormsModule,
    MatTableModule,
    MatSelectModule,
    MatDatepickerModule,
    MatProgressSpinnerModule,
    RouterModule
  ]
})
export class EnrollmentsModule { }
