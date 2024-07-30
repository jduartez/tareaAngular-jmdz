
import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CoursesDialogComponent } from '../../../courses/components/courses-dialog/courses-dialog.component';
import { Enrols } from '../../models/enrols';
import { EnrollmentsService } from '../../../../../core/enrollments.service';

@Component({
  selector: 'app-enrollments-dialog',
  templateUrl: './enrollments-dialog.component.html',
  styleUrl: './enrollments-dialog.component.scss'
})
export class EnrollmentsDialogComponent {
  enrolForm!: FormGroup;
  isEditing: boolean = false;

  alumno:any;
  cours:any;

  constructor(
    private formBuildaer: FormBuilder,
    private matDialogRef: MatDialogRef<CoursesDialogComponent>,
    private enrolsService: EnrollmentsService,
    @Inject(MAT_DIALOG_DATA) public editingEnrollments?: Enrols,
    
  ) {
    this.enrolForm = this.formBuildaer.group({
      alumno: [],
      curso: [],
    });
    if (this.editingEnrollments) {
      this.isEditing = true;
      this.enrolForm.patchValue(this.editingEnrollments);
    }
  }

  onSubmit(): void {
    console.log(this.enrolForm.value);
    this.matDialogRef.close(this.enrolForm.value);
  }

  ngOnInit() {
    //this.submitted = false;  
  }

  getLisStudents(){
    return this.enrolsService.getSelectStudent();
  }

  getLisCourses(){
    return this.enrolsService.getSelectCourses();
  }

}
