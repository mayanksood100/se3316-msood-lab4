import { CoursesService } from './../courses.service';
import { Courses } from './../Courses';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses: Courses[];
  selectedCourse: Courses;
  subject: string;
  courseNumber:string;
  courseComponent: string;

  constructor(private courseService: CoursesService) { }

  ngOnInit(): void {
    this.getAllCourses();
  }

  getAllCourses(){
    this.courseService.getAllCourses().subscribe(courses => {
      this.courses = courses;
    });
  }

  onSelect(course:Courses){
    this.selectedCourse=course;
    console.log(this.selectedCourse);
  }

  colorComponent(ssrComponent){
    switch (ssrComponent) {
      case 'TUT':
        return 'red';
      case 'LAB':
        return 'blue';
      
    }
  }

  

}
