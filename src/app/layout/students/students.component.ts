import { Component, OnInit } from '@angular/core';
import { students_data } from 'src/shared_data/students_data';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  studentsCardData = students_data;

  constructor() { }

  ngOnInit(): void {
  }

}
