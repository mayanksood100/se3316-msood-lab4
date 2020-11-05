import { COURSES } from './../all-Courses';
import { Component, OnInit } from '@angular/core';
import {Courses} from '../Courses';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses = COURSES;

  constructor() { }

  ngOnInit(): void {
  }

}
