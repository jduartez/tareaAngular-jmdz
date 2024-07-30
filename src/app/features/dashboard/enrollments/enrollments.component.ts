import { Component } from '@angular/core';
import { Enrols } from './models/enrols';
import { EnrollmentsService } from '../../../core/enrollments.service';
import { MatDialog } from '@angular/material/dialog';
import { EnrollmentsDialogComponent } from './components/enrollments-dialog/enrollments-dialog.component';
import { crearId } from '../../../shared/utils/creaid';

@Component({
  selector: 'app-enrollments',
  templateUrl: './enrollments.component.html',
  styleUrl: './enrollments.component.scss'
})
export class EnrollmentsComponent {
  displayedColumns: string[] = [
    'id',
    'alumno',
    'curso',
    'actions',
  ];

  dataEnrol: Enrols[] = [];
  isLoading = false;

  alumno:any;
  cours:any;

  constructor(
    private matDialog: MatDialog,
    private enrolsService: EnrollmentsService,
  ) {}

  ngOnInit() {
    this.loadEnrollments();
  }

  loadEnrollments() {
    this.isLoading = true;
    this.enrolsService.getEnrol().subscribe((enrol) => {
      this.dataEnrol = enrol;
      this.isLoading = false;
    });
  }

  enrol: string = '';


  openDialog(): void {
    this.matDialog
      .open(EnrollmentsDialogComponent)
      .afterClosed()
      .subscribe({
        next: (enrol) => {
        
          this.isLoading = true;

          this.enrolsService.addEnrollment(enrol).subscribe({
            next: (enrols) => {
              enrol['id'] = crearId(3);
              this.dataEnrol = [...enrols, enrol];
            },
            complete: () => {
              this.isLoading = false;
            },
          });

        },
      });
  }

  getLisStudents(){
    return this.enrolsService.getSelectStudent();
  }

  getLisCourses(){
    return this.enrolsService.getSelectCourses();
  }

  editEnrol(enrol: Enrols) {
    this.matDialog
      .open(EnrollmentsDialogComponent, {
        data: enrol,
      })
      .afterClosed()
      .subscribe({
        next: (enrol) => {
          console.log(enrol);

          if (!!enrol) {
            this.dataEnrol= this.dataEnrol.map((c) => {
              if (c.id === enrol.id) {
                return enrol;
              }
              return c;
            });
          }
        },
      });
  }

  deleteEnrolById(id: string) {
    if(confirm('Esta seguro de eliminar?')){
      this.dataEnrol = this.dataEnrol.filter((enrol) => enrol.id !== id);
    }
  }

}
