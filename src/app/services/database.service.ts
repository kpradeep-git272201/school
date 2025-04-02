import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor() {


   }


   getRegisteredStd(){
    return [
      {
        "name": "Aarav Sharma",
        "admissionNumber": "IND001",
        "dob": "2010-05-12"
      },
      {
        "name": "Priya Verma",
        "admissionNumber": "IND002",
        "dob": "2011-09-25"
      },
      {
        "name": "Rahul Singh",
        "admissionNumber": "IND003",
        "dob": "2009-03-08"
      },
      {
        "name": "Ananya Iyer",
        "admissionNumber": "IND004",
        "dob": "2012-07-19"
      },
      {
        "name": "Vikram Patil",
        "admissionNumber": "IND005",
        "dob": "2013-01-30"
      },
      {
        "name": "Demo",
        "admissionNumber": "Demo",
        "dob": "2025-03-23"
      }
    ];    
   }
}
