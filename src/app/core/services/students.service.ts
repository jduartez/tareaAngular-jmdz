import { Injectable } from '@angular/core';
import { Students } from '../../features/dashboard/students/models';
import { map, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http: HttpClient) { }

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

  getData(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/students`);
  }

  getDataDetailsStudent(id:number): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/students/${id}`);
  }

  editData(params: any, id:any) {        
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put(`${environment.apiUrl}/students/${id}`, params,{ headers });
  }


  createData(params: any) {        
    return this.http.post<any>(`${environment.apiUrl}/students`, params);
  }

  deleteData(params: any, id:any) {            
    return this.http.delete(`${environment.apiUrl}/students/${id}`, params);
  }

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
