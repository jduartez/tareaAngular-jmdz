import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from '../courses/courses.component';
import { CoursesDialogComponent } from './components/courses-dialog/courses-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';
import { CoursesdetailsDialogComponent } from './components/coursesdetails-dialog/coursesdetails-dialog.component';


@NgModule({
  declarations: [
    CoursesComponent,
    CoursesDialogComponent,
    CoursesdetailsDialogComponent
  ],
  exports: [CoursesComponent],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormField,
    MatInputModule,
    ReactiveFormsModule,
    MatTableModule,
    MatSelectModule,
    MatDatepickerModule,
    MatProgressSpinnerModule,
    RouterModule,
  ]
})
export class CoursesModule { }
