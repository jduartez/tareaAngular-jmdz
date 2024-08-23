import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { Students } from '../../models';
import { StudentsService } from '../../../../../core/services/students.service';

@Component({
  selector: 'app-students-dialog',
  templateUrl: './students-dialog.component.html',
  styleUrl: './students-dialog.component.scss',
})


export class StudentsDialogComponent implements OnInit {
  [x: string]: any;
  studentsForm: FormGroup;
  isEditing: boolean = false;
  submitted = false;
  items: any[] = [];
  
  constructor(
    private studentService: StudentsService,
    private formBuildaer: FormBuilder,
    private matDialogRef: MatDialogRef<StudentsDialogComponent>, 
    @Inject(MAT_DIALOG_DATA) public editingStudents?: Students,

  ) {
    this.studentsForm = this.formBuildaer.group({
     
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      rut: ['', Validators.required], 

    });

    if (this.editingStudents) {
      this.isEditing = true;
      this.studentsForm.patchValue(this.editingStudents);
    }

  }

  loadItems(): void {
    this.studentService.getData().subscribe((data) => {
      this.items = data;
    });
  }

  onSubmit(): void {
    if(this.studentsForm.invalid){
      this.submitted = false; 
      return alert("Error... Todos los campos son obligatorios");
      
    }else{
      this.submitted = true;     
      this.studentService.editData(this.studentsForm.value,this.editingStudents?.id).subscribe((res)=>{ alert('Registro Actualizado'); window.location.reload(); });      
           
      
      this.matDialogRef.close(this.studentsForm.value);
      
    }
   
  }
  ngOnInit() {
    this.loadItems();   
    this.submitted = false; 
  }
}
