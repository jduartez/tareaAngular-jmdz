import { Component } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { EnrollmentsInterface } from './models/enrollments.interface';
import { EnrollmentsService } from '../../../core/enrollments.service';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-enrollments',
  templateUrl: './enrollments.component.html',
  styleUrl: './enrollments.component.scss'
})
export class EnrollmentsComponent {

  displayedColumns: string[] = [
    'alumno',
    'curso',
    'actions',
  ];

  

  isLoading = false;
  // enrollments$: Observable<Enrollment[]>;
  enrollments: EnrollmentsInterface[] = [];

  mySubject$ = new Subject();
  myObservable$ = new Observable((subscriber) => subscriber.next(1));

  alumn:any;
  cours:any;

  constructor(
    private enrollmentsService: EnrollmentsService,
    private matDialog: MatDialog,
  ) {
    this.mySubject$.next(1);

    this.enrollmentsService.getEnrollments().subscribe({
      next: (v) => (this.enrollments = v),
      complete: () => (this.isLoading = false),
    });
   
  }

  ngOnInit() {
    this.loadEnrollments();
  }

  loadEnrollments() {
    this.isLoading = true;
    this.enrollmentsService.getEnrol().subscribe((enrolments) => {
      this.enrollments = enrolments;
      this.isLoading = false;
    });
  }


  getLisStudents(){
    return this.enrollmentsService.getSelectStudent();
  }

  getLisCourses(){
    return this.enrollmentsService.getSelectCourses();
  }

  // addEnrollment(): void {
  //   this.enrollmentsService.addEnrollment().subscribe({
  //     next: (v) => (this.enrollments = v),
  //   });

   // this.notifierService.sendNotification('Se agrego una inscripcion!');
  //}

  openDialog(): void {
    this.matDialog
      .open(EnrollmentsComponent)
      .afterClosed()
      .subscribe({
        next: (enrol) => {
        
          this.isLoading = true;

          this.enrollmentsService.addEnrollment(enrol).subscribe({
            next: (enroles) => {
              this.enrollments = [...enroles];
            },
            complete: () => {
              this.isLoading = false;
            },
          });

        },
      });
  }



}
