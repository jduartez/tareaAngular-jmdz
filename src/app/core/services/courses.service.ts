import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Course } from '../../features/dashboard/courses/models/courses.interface';


@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private courses: Course[] = [
    {
      id: 'BE1',
      title: 'NestJs',
      description: 'Curso de Nestjs',
      status: 'Pendiente',
      startDate: new Date(),
      endDate: new Date(),
    },
    {
      id: 'FE1',
      title: 'Angular',
      description: 'Curso de Angular',
      status: 'Pendiente',
      startDate: new Date(),
      endDate: new Date(),
    },
    {
      id: 'BE2',
      title: 'SQL',
      description: 'Curso de Bases de Datos',
      status: 'Pendiente',
      startDate: new Date(),
      endDate: new Date(),
    },
    {
      id: 'BE3',
      title: 'Photoshop',
      description: 'Curso de Ilustraciones',
      status: 'Pendiente',
      startDate: new Date(),
      endDate: new Date(),
    },
    {
      id: 'BE4',
      title: 'Oracle',
      description: 'Oracle express',
      status: 'Pendiente',
      startDate: new Date(),
      endDate: new Date(),
    },
  ];

  getCourses(): Observable<Course[]> {
    return new Observable((observer) => {
      setTimeout(() => {
        observer.next(this.courses);
        observer.complete();
      }, 1500);
    });
  }

  getCourseList(){
    return this.courses;
  }

  gtCourseById(id: string): Observable<Course | undefined> {
    return this.getCourses().pipe(
      map((courses: Course[]) => courses.find((c) => c.id === id)),
    );
  }

  addCourse(course: Course): Observable<Course[]> {
    //this.courses.push(course);
    return new Observable((observer) => {
      setTimeout(() => {
        observer.next(this.courses);
        observer.complete();
      }, 1500);
    });
  }
}