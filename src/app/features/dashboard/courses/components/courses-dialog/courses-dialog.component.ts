import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Course } from '../../models/courses.interface';


@Component({
  selector: 'app-courses-dialog',
  templateUrl: './courses-dialog.component.html',
  styleUrl: './courses-dialog.component.scss'
})
export class CoursesDialogComponent implements OnInit{
  courseForm: FormGroup;
  isEditing: boolean = false;

  constructor(
    private formBuildaer: FormBuilder,
    private matDialogRef: MatDialogRef<CoursesDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public editingCourse?: Course,
  ) {
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
    console.log(this.courseForm.value);
    this.matDialogRef.close(this.courseForm.value);
  }

  ngOnInit() {
    //this.submitted = false;  
  }
}
