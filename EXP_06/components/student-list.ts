import { Component , OnInit} from '@angular/core';
import { StudentService } from '../../services/student-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './student-list.html',
  styleUrl: './student-list.css'
})
export class StudentList implements OnInit {

  constructor(private studentService : StudentService) { };

  students : any = [];

  ngOnInit(): void {
    this.students = this.studentService.getStudentData();
  }


  newStudent = { name: '', prn: '', course: '' };

  addStudent() {
    if(this.newStudent.name && this.newStudent.prn && this.newStudent.course){
      this.studentService.addStudent(this.newStudent);
      this.newStudent = { name: '', prn: '', course: '' }; // Reset form
    }
  }

  deleteStudent(id: number) {
    this.studentService.deleteStudent(id);
    this.students = this.studentService.getStudentData(); // Refresh view
  }
}
