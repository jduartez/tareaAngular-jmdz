import { Injectable } from '@angular/core';
import { Students } from '../../features/dashboard/students/models';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  private students : Students[] = [
    {
      id: 'UD1',
      name: 'JOSE MANUEL',
      last_name: 'DUARTE',
      rut: '11123456-7',
      status: 'Aprobado',
      startDate: new Date(),
      endDate: new Date(),
    },
    {
      id: 'UD2',
      name: 'Ricardo',
      last_name: 'Araya',
      rut: '12456789-0',
      status: 'Rechazado',
      startDate: new Date(),
      endDate: new Date(),
    },
    {
      id: 'UD3',
      name: 'Valeria',
      last_name: 'Varela',
      rut: '15678921-3',
      status: 'Aprobado',
      startDate: new Date(),
      endDate: new Date(),
    },
    {
      id: 'UD4',
      name: 'Daniela',
      last_name: 'Acuña',
      rut: '17456987-3',
      status: 'Aprobado',
      startDate: new Date(),
      endDate: new Date(),
    },
    {
      id: 'UD4',
      name: 'Sophia',
      last_name: 'Letellier',
      rut: '20145698-2',
      status: 'Aprobado',
      startDate: new Date(),
      endDate: new Date(),
    },
  ];

  getStudents(): Observable<Students[]> {
    return new Observable((observer) => {
      setTimeout(() => {
        observer.next(this.students);
        observer.complete();
      }, 1500);
    });
  }

  getStudentsList(){
    return this.students;
  }

  gtStudentsById(id: string): Observable<Students | undefined> {
    return this.getStudents().pipe(
      map((students: Students[]) => students.find((c) => c.id === id)),
    );
  }

  addStudents(student: Students): Observable<Students[]> {
    //this.students.push(student);
    return new Observable((observer) => {
      setTimeout(() => {
        observer.next(this.students);
        observer.complete();
      }, 1500);
    });
  }

}
