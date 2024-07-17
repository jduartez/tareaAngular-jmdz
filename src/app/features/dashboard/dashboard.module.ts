import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { DashboardComponent } from './dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { StudentsModule } from './students/students.module';
import {MatListModule} from '@angular/material/list';
import { SharedModule } from '../../shared/shared.module';
import { CoursesModule } from './courses/courses.module';
import { EnrollmentsModule } from './enrollments/enrollments.module';



@NgModule({
  declarations: [
    DashboardComponent
  ],  
  exports:[DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    StudentsModule,
    MatListModule,
    SharedModule,
    CoursesModule,
    EnrollmentsModule
  ]
})
export class DashboardModule { }
