import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

  getPendingHomework(){
    return [
      {
        subject: 'Hindi',
        teacher: 'NITYA KUMAR',
        title: 'HW',
        assignedOn: '26 Sep, 2022 | 15:07',
        dueOn: 'N/A',
        attachment: null,
        description: 'Do pg 71 and 72 in grammar book.',
        status: 'Pending',
        subjectColor: '#c741fa'
      },
      {
        subject: 'Hindi',
        teacher: 'NITYA KUMAR',
        title: 'CW',
        assignedOn: '26 Sep, 2022 | 15:07',
        dueOn: 'N/A',
        attachment: 'Download attached file',
        description: 'In grammar notebook.',
        status: 'Pending',
        subjectColor: '#ed24d6'
      },
      {
        subject: 'Mathematics',
        teacher: 'VASUNDHARA',
        title: 'Ch 7',
        assignedOn: '26 Sep, 2022 | 15:05',
        dueOn: 'N/A',
        attachment: null,
        description: '',
        status: 'Pending',
        subjectColor: '#09edd3'
      }
    ];
  }

  getCompleteHomework(){
    return [
      {
        subject: 'Science',
        teacher: 'RAHUL SHARMA',
        title: 'Chapter 5',
        assignedOn: '20 Sep, 2022 | 14:00',
        dueOn: '25 Sep, 2022',
        attachment: null,
        description: 'Complete the exercises in the textbook.',
        status: 'Completed',
        subjectColor: '#ed7009'
      },
      {
        subject: 'English',
        teacher: 'ANITA VERMA',
        title: 'Essay Writing',
        assignedOn: '18 Sep, 2022 | 13:30',
        dueOn: '22 Sep, 2022',
        attachment: 'Download attached file',
        description: 'Write an essay on "My Best Friend".',
        status: 'Completed',
        subjectColor: '#b0ed09'
      }
    ];
  }
}
