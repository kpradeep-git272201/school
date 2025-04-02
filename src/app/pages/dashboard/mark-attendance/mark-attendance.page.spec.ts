import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MarkAttendancePage } from './mark-attendance.page';

describe('MarkAttendancePage', () => {
  let component: MarkAttendancePage;
  let fixture: ComponentFixture<MarkAttendancePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkAttendancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
