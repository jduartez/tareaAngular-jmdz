import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Course } from '../../models/courses.interface';

@Component({
  selector: 'app-coursesdetails-dialog',
  templateUrl: './coursesdetails-dialog.component.html',
  styleUrl: './coursesdetails-dialog.component.scss'
})
export class CoursesdetailsDialogComponent implements OnInit{
  courseForm: FormGroup;
  isEditing: boolean = false;

  constructor(
    private formBuildaer: FormBuilder,
    private matDialogRef: MatDialogRef<CoursesdetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public editingCourse?: Course,
  ) 
  
  {
    this.courseForm = this.formBuildaer.group({
      id: [],
      title: [],
      description: [],
      status: [],
      startDate: [],
      endDate: [],
    });

    // console.log(this.editingCourse);
    //
    if (this.editingCourse) {
      this.isEditing = true;
      this.courseForm.patchValue(this.editingCourse);
    }
  }

  onSubmit(): void {    
    this.matDialogRef.close(this.courseForm.value);
  }

  ngOnInit() {
    //this.submitted = false;  
  }
}
