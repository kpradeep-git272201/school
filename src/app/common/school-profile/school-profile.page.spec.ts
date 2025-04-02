import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SchoolProfilePage } from './school-profile.page';

describe('SchoolProfilePage', () => {
  let component: SchoolProfilePage;
  let fixture: ComponentFixture<SchoolProfilePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
