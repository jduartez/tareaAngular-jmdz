import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesdetailsDialogComponent } from './coursesdetails-dialog.component';

describe('CoursesdetailsDialogComponent', () => {
  let component: CoursesdetailsDialogComponent;
  let fixture: ComponentFixture<CoursesdetailsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoursesdetailsDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoursesdetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
