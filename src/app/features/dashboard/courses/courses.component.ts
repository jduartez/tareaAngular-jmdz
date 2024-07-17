import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Course } from './models/courses.interface';
import { CoursesService } from '../../../core/courses.service';
import { CoursesDialogComponent } from './components/courses-dialog/courses-dialog.component';
import { CoursesdetailsDialogComponent } from './components/coursesdetails-dialog/coursesdetails-dialog.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {
  displayedColumns: string[] = [
    'id',
    'title',
    'description',
    'status',
    'startDate',
    'endDate',
    'actions',
  ];

  dataCourse: Course[] = [];

  isLoading = false;

  constructor(
    private matDialog: MatDialog,
    private coursesService: CoursesService,
  ) {}

  ngOnInit() {
    this.loadCourses();
  }

  loadCourses() {
    this.isLoading = true;
    this.coursesService.getCourses().subscribe((courses) => {
      this.dataCourse = courses;
      this.isLoading = false;
    });
  }

  course: string = '';


  openDialog(): void {
    this.matDialog
      .open(CoursesDialogComponent)
      .afterClosed()
      .subscribe({
        next: (course) => {
        
          this.isLoading = true;

          this.coursesService.addCourse(course).subscribe({
            next: (courses) => {
              this.dataCourse = [...courses];
            },
            complete: () => {
              this.isLoading = false;
            },
          });

        },
      });
  }

  editCourse(course: Course) {
    this.matDialog
      .open(CoursesDialogComponent, {
        data: course,
      })
      .afterClosed()
      .subscribe({
        next: (course) => {
          console.log(course);

          if (!!course) {
            this.dataCourse = this.dataCourse.map((c) => {
              if (c.id === course.id) {
                return course;
              }
              return c;
            });
          }
        },
      });
  }


  OpenDetailsCourse(course: Course) {
    this.matDialog
      .open(CoursesdetailsDialogComponent, {
        data: course,
      })
      .afterClosed()
      .subscribe({
        next: (course) => {
          console.log(course);

          if (!!course) {
            this.dataCourse = this.dataCourse.map((c) => {
              if (c.id === course.id) {
                return course;
              }
              return c;
            });
          }
        },
      });
  }


  deleteCourseById(id: string) {
    this.dataCourse = this.dataCourse.filter((course) => course.id !== id);
  }
}
