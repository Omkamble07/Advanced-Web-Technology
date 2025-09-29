import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  constructor() { }

  StudentData = [
    { id: 1, name: 'om', prn: '47', course: 'AIML' },
    { id: 2, name: 'pranav', prn: '59', course: 'AIML' },
  ]

  getStudentData() {
    return this.StudentData;
  }

  addStudent(student: any) {
    student.id = this.StudentData.length + 1; // Auto ID
    this.StudentData.push(student);
  }

  deleteStudent(id: number) {
    this.StudentData = this.StudentData.filter(student => student.id !== id);
  }


}
