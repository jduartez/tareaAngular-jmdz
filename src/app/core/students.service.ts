import { Injectable } from '@angular/core';
import { Students } from '../features/dashboard/students/models';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  private students : Students[] = [
    {
      id: '1',
      name: 'JOSE MANUEL',
      last_name: 'DUARTE',
      rut: '11123456-7',
      status: 'Aprobado',
      startDate: new Date(),
      endDate: new Date(),
    },
    {
      id: '2',
      name: 'Ricardo',
      last_name: 'Araya',
      rut: '12456789-0',
      status: 'Rechazado',
      startDate: new Date(),
      endDate: new Date(),
    },
    {
      id: '3',
      name: 'Valeria',
      last_name: 'Varela',
      rut: '15678921-3',
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
    this.students.push(student);
    return new Observable((observer) => {
      setTimeout(() => {
        observer.next(this.students);
        observer.complete();
      }, 1500);
    });
  }

}
