
import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CoursesDialogComponent } from '../../../courses/components/courses-dialog/courses-dialog.component';
import { Enrols } from '../../models/enrols';
import { EnrollmentsService } from '../../../../../core/services/enrollments.service';

interface alum {
  value: string;
  viewValue: string;
}

interface cur {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-enrollments-dialog',
  templateUrl: './enrollments-dialog.component.html',
  styleUrl: './enrollments-dialog.component.scss'
})
export class EnrollmentsDialogComponent {
  enrolForm!: FormGroup;
  isEditing: boolean = false;

  
  cur =  new FormControl<any>('', Validators.required);
  alum = new FormControl<any>('', Validators.required);

  constructor(
    private formBuildaer: FormBuilder,
    private matDialogRef: MatDialogRef<CoursesDialogComponent>,
    private enrolsService: EnrollmentsService,
    @Inject(MAT_DIALOG_DATA) public editingEnrollments?: Enrols,
    
  ) {
    this.enrolForm = this.formBuildaer.group({
      id:[],
      alumno: [],
      curso: [],
    });
    if (this.editingEnrollments) {
      this.isEditing = true;
      this.enrolForm.patchValue(this.editingEnrollments);
    }
  }

  onSubmit(): void {
  
    //console.log(this.enrolForm.value);
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
