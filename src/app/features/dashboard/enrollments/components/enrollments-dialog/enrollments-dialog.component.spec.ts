import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollmentsDialogComponent } from './enrollments-dialog.component';

describe('EnrollmentsDialogComponent', () => {
  let component: EnrollmentsDialogComponent;
  let fixture: ComponentFixture<EnrollmentsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnrollmentsDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnrollmentsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
