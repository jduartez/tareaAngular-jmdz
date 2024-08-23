import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { adminGuard } from '../../core/guards/admin.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
    // component: HomeComponent,
  },
  {
    // /dashboard/courses
    path: 'courses',
    loadChildren: () =>
      import('./courses/courses.module').then((m) => m.CoursesModule),
  },
  {
    // /dashboard/students
    path: 'students',
    loadChildren: () =>
      import('./students/students.module').then((m) => m.StudentsModule),
  },
  {
    path: 'enrollments',
    //canActivate: [adminGuard],
    loadChildren: () =>
      import('./enrollments/enrollments.module').then((m) => m.EnrollmentsModule),
    
  },
  {
    path: '**', // Cualquier ruta que no coincida con las anteriores (basicmanete es un default)
    redirectTo: '/dashboard/home',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
