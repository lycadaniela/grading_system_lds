import { Component, OnInit } from '@angular/core';
import { teachers_data } from 'src/shared_data/teachers_data';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss']
})
export class TeachersComponent implements OnInit {
  teachersCardData = teachers_data;

  constructor() { }

  ngOnInit(): void {
  }

}
