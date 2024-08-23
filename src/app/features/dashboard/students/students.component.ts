import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StudentsDialogComponent } from './components/students-dialog/students-dialog.component';
import { Students } from './models';
import { StudentsService } from '../../../core/services/students.service';
import { crearId } from '../../../shared/utils/creaid';
import { StudentsdetailsDialogComponent } from './components/studentsdetails-dialog/studentsdetails-dialog.component';


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
    // 'status',
    // 'startDate',
    // 'endDate',
    'actions',
  ];
  dataStudents: Students[] = [];

  isLoading = false;
  datos: any;
  tpousuario: any;

  constructor(
    private matDialog: MatDialog, 
    private studentService: StudentsService ) { }


  ngOnInit() {
    this.tpousuario = localStorage.getItem('tpousuairo');
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
    this.studentService.getData().subscribe((students) => {
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
              this.studentService.createData(student).subscribe((res)=>{ alert('Registro Creado'); });
            },
            complete: () => {
              this.isLoading = false;
            },
          });
        },
      });
  }

   editStudent(student: Students) {
    // this.studentService.editData(student);
     this.matDialog
       .open(StudentsDialogComponent, {
         data: student,         
       })
       .afterClosed()
       .subscribe({
         next: (student) => {
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

  openDialogDetails(id:number): void {
    this.matDialog.open(StudentsdetailsDialogComponent, {
      width: '250px',
      data:{id:id}
    });
  }


  deleteStudent(id: string) {
    if(confirm('Esta seguro de eliminar al estudiante: ' + id)){
      this.dataStudents = this.dataStudents.filter((student) => student.id !== id);
      this.studentService.deleteData(this.student, id).subscribe((res) => {window.location.reload();});
    }
  }

}
