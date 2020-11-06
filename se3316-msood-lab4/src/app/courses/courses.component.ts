import { CoursesService } from './../courses.service';
import { Courses } from './../Courses';
import { COURSES } from './../all-Courses';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses = COURSES;
  selectedCourse: Courses;
  subject: string;
  courseNumber:string;

  constructor(private courseService: CoursesService) { }

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses(){
    this.courseService.getCourses().subscribe(courses=>this.courses=courses);
  }

  onSelect(course:Courses){
    this.selectedCourse=course;
    console.log(this.selectedCourse);
  }


}
