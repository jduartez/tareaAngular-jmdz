import { Component, Inject, OnInit } from '@angular/core';
import { StudentsService } from '../../../../../core/services/students.service';
import {  MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-studentsdetails-dialog',
  templateUrl: './studentsdetails-dialog.component.html',
  styleUrl: './studentsdetails-dialog.component.scss'
})
export class StudentsdetailsDialogComponent implements OnInit{
 user: any;

  constructor(
    private apiService: StudentsService,
    private matDialogRef: MatDialogRef<StudentsdetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { id: number },
  ){}

  ngOnInit(): void {
    this.apiService.getDataDetailsStudent(this.data.id).subscribe(response => {
      this.user = response;
    });
  }

  onClose(): void {
    this.matDialogRef.close();
  }
}
