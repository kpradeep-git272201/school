import { Component, OnInit } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
  standalone: true,
  imports: [SharedModule],
})
export class SignInPage implements OnInit {
  loginForm: FormGroup;
  registeredStudent: any = [];
  constructor(
    private router: Router,
    private databaseService: DatabaseService
  ) {
    this.loginForm = new FormGroup({
      name: new FormControl('', Validators.required),
      admissionNumber: new FormControl('', Validators.required),
      dob: new FormControl('', Validators.required),
    });
  }

  ngOnInit() {
    this.registeredStudent = this.databaseService.getRegisteredStd();
  }

  signIn() {
    if (this.loginForm.valid) {
      const loginData = this.loginForm.getRawValue();
      console.log("Login Data:", JSON.stringify(loginData));
  
      const matchedStudent = this.registeredStudent.find(
        (student: { name: string; admissionNumber: string; dob: string }) =>
          student.name.toUpperCase() === loginData.name.toUpperCase() &&
          student.admissionNumber.toUpperCase() === loginData.admissionNumber.toUpperCase() &&
          student.dob === loginData.dob
      );
  
      console.log("Matched Student:", matchedStudent);
      if (matchedStudent) {
        this.router.navigate(['/auth/create-pin'], {
          queryParams: {
            name: matchedStudent.name,
            admissionNumber: matchedStudent.admissionNumber,
            dob: matchedStudent.dob
          }
        });
      } else {
        alert('Invalid credentials. Please try again.');
      }
    } else {
      // alert('Please fill all fields!');
      this.router.navigate(['/auth/create-pin']);
    }
  }
  
  goToLogin(){
    this.router.navigate(["/auth/login"])
  }
}
