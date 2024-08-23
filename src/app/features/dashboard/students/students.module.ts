import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { StudentsDialogComponent } from './components/students-dialog/students-dialog.component';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { SharedModule } from '../../../shared/shared.module';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { StudentsdetailsDialogComponent } from './components/studentsdetails-dialog/studentsdetails-dialog.component';


@NgModule({
  declarations: [
    StudentsComponent,
    StudentsDialogComponent,
    StudentsdetailsDialogComponent,   
  ],
  exports:[StudentsComponent],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormField,
    MatInputModule,
    ReactiveFormsModule,
    MatTableModule,
    SharedModule, 
    MatSelectModule,
    MatDatepickerModule,
    MatProgressSpinnerModule   
  ]
})
export class StudentsModule { }
