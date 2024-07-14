import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StudentsDialogComponent } from './components/students-dialog/students-dialog.component';
import { Students } from './models';



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
  dataSource: Students[] = [
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


  constructor(private matDialog: MatDialog) { }
  students: string = '';


  openDialog(): void {
    this.matDialog
      .open(StudentsDialogComponent)
      .afterClosed()
      .subscribe({
        next: (students) => {
          console.log(students);

          this.dataSource = [...this.dataSource, students];
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
            this.dataSource = this.dataSource.map((c) => {
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
    this.dataSource = this.dataSource.filter((student) => student.id !== id);
  }

}
