import { Injectable } from '@angular/core';
import { Courses } from './Courses';
import { COURSES } from './all-Courses';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() {}
  getCourses(): Observable<Courses[]>{
    return of(COURSES);
  }
}
