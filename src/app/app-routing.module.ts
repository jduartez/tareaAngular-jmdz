import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { StudentsComponent } from './features/dashboard/students/students.component';
import { CoursesComponent } from './features/dashboard/courses/courses.component';
import { EnrollmentsComponent } from './features/dashboard/enrollments/enrollments.component';

const routes: Routes = [
  {
    // path: /
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
      children:[
        {
          path: 'students',
          component: StudentsComponent
        },
        {
          path: 'courses',
          component: CoursesComponent
        },
        {
          path: 'enrollments',
          component: EnrollmentsComponent
        }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
