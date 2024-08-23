import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsdetailsDialogComponent } from './studentsdetails-dialog.component';

describe('StudentsdetailsDialogComponent', () => {
  let component: StudentsdetailsDialogComponent;
  let fixture: ComponentFixture<StudentsdetailsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentsdetailsDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentsdetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
