import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Course } from './models/courses.interface';
import { CoursesService } from '../../../core/services/courses.service';
import { CoursesDialogComponent } from './components/courses-dialog/courses-dialog.component';
import { CoursesdetailsDialogComponent } from './components/coursesdetails-dialog/coursesdetails-dialog.component';
import { crearId } from '../../../shared/utils/creaid';

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
  tpousuario: any;
  isLoading = false;

  constructor(
    private matDialog: MatDialog,
    private coursesService: CoursesService,
  ) {}

  ngOnInit() {
    this.tpousuario = localStorage.getItem('tpousuairo');
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
              course['id'] = crearId(3)
              this.dataCourse = [...courses, course];
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
    if(confirm('Esta seguro de eliminar el curso' + id)){
      this.dataCourse = this.dataCourse.filter((course) => course.id !== id);
    }
  }
}
