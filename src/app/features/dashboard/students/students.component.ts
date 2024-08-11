import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StudentsDialogComponent } from './components/students-dialog/students-dialog.component';
import { Students } from './models';
import { StudentsService } from '../../../core/services/students.service';
import { crearId } from '../../../shared/utils/creaid';


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss',

})
export class StudentsComponent {
  displayedColumns: string[] = [
    'id',
    'name',
    'rut',
    'status',
    'startDate',
    'endDate',
    'actions',
  ];
  dataStudents: Students[] = [];

  isLoading = false;
  datos: any;

  constructor(private matDialog: MatDialog, private studentService: StudentsService ) { }


  ngOnInit() {
    //this.loadStudents();
    this.studentService.getData().subscribe(
      (response) => {
        this.datos = response;
      },
      (error) => {
        console.error('Error al obtener los datos', error);
      }
    );
  }

  loadStudents() {
    this.isLoading = true;
    this.studentService.getStudents().subscribe((students) => {
      this.dataStudents = students;
      this.isLoading = false;
    });
  }

  student: string = '';
  openDialog(): void {
    this.matDialog
      .open(StudentsDialogComponent)
      .afterClosed()
      .subscribe({
        next: (student) => {
         
          this.isLoading = true;

          this.studentService.addStudents(student).subscribe({
            next: (students) => {
              student['id'] = crearId(3);
              this.dataStudents = [...students, student];
            },
            complete: () => {
              this.isLoading = false;
            },
          });
        },
      });
  }

  editStudent(student: Students) {
    this.matDialog
      .open(StudentsDialogComponent, {
        data: student,
      })
      .afterClosed()
      .subscribe({
        next: (student) => {
          console.log(student);

          if (!!student) {
            this.dataStudents = this.dataStudents.map((c) => {
              if (c.id === student.id) {
                return student;
              }
              return c;
            });
          }
        },
      });
  }


  deleteStudent(id: string) {
    if(confirm('Esta seguro de eliminar al estudiante: ' + id)){
      this.dataStudents = this.dataStudents.filter((student) => student.id !== id);
    }
  }

}
