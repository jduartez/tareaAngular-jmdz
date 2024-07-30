import { Injectable } from '@angular/core';

import { Observable, of, delay } from 'rxjs';
import { StudentsService } from './students.service';
import { CoursesService } from './courses.service';
import { Enrols } from '../features/dashboard/enrollments/models/enrols';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentsService {

  constructor(private studentarr : StudentsService, private coursearr: CoursesService ){}

  private MY_DATABASE : Enrols[] = [
    {      
      id: '1',
      alumno: 'JOSE MANUEL',
      curso: 'BE-1'
    },
    {   
      id:'2',   
      alumno: 'Ricardo',
      curso: 'FE-1'
    },
   
  ];

  getEnrol(): Observable<Enrols[]> {
    return new Observable((observer) => {
      setTimeout(() => {
        observer.next(this.MY_DATABASE);
        observer.complete();
      }, 1500);
    });
  }

  getSelectStudent(){
    console.log(this.studentarr.getStudentsList());
    return this.studentarr.getStudentsList();
  }

  getSelectCourses(){
    return this.coursearr.getCourseList();

  }

  getEnrollments(): Observable<Enrols[]> {
    return of<Enrols[]>(this.MY_DATABASE).pipe(delay(400));
  }

  // addEnrollment(): Observable<EnrollmentsInterface[]> {
  //   this.MY_DATABASE.push({
  //     alumno: 'Esteban',
  //     curso: 'FE-2',
  //   });
  //   return this.getEnrollments();
  // }

  addEnrollment(enrol: Enrols): Observable<Enrols[]> {
  
    this.MY_DATABASE.push(enrol);
    return new Observable((observer) => {
      setTimeout(() => {
        observer.next(this.MY_DATABASE);
        observer.complete();
      }, 1500);
    });
  }
  

}
