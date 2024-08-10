import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CoursesModule } from './courses/courses.module';
import { MatListModule } from '@angular/material/list';
import { EnrollmentsModule } from './enrollments/enrollments.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [DashboardComponent],
  exports: [DashboardComponent],
  imports: [CommonModule, DashboardRoutingModule, SharedModule, MatListModule, MatSidenavModule,
    MatToolbarModule,MatIconModule, MatButtonModule,MatCardModule
  ],
})
export class DashboardModule {}