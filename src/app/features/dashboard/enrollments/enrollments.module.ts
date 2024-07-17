import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnrollmentsRoutingModule } from './enrollments-routing.module';
import { EnrollmentsComponent } from './enrollments.component';
import {MatSelectModule} from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ComponentsComponent } from './components/components.component';

@NgModule({
  declarations: [
    EnrollmentsComponent,
    ComponentsComponent
  ],
  exports:[EnrollmentsComponent],
  imports: [
    CommonModule,
    EnrollmentsRoutingModule,
    MatSelectModule,
    MatTableModule,
    MatProgressSpinnerModule
  ]
})
export class EnrollmentsModule { }
