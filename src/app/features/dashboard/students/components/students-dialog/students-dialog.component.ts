import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { Students } from '../../models';

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
  
  constructor(
    private formBuildaer: FormBuilder,
    private matDialogRef: MatDialogRef<StudentsDialogComponent>, 
    @Inject(MAT_DIALOG_DATA) public editingStudents?: Students,

  ) {
    this.studentsForm = this.formBuildaer.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      last_name: ['', Validators.required],
      rut: ['', Validators.required],
      status: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required]

    });

    if (this.editingStudents) {
      this.isEditing = true;
      this.studentsForm.patchValue(this.editingStudents);
    }

  }
  onSubmit(): void {
    if(this.studentsForm.invalid){
      this.submitted = false; 
      return alert("Error... Todos los campos son obligatorios");
      
    }else{
      this.submitted = true;
      this.matDialogRef.close(this.studentsForm.value);
    }
   
  }
  ngOnInit() {
    this.submitted = false;  
  }
}
