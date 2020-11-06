import { Courses } from './../Courses';
import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name:'courseNumberFilter'
})

export class CourseNumberFilterPipe implements PipeTransform{
    transform(courses:Courses[], courseNumber:string): Courses[]{
        if(!courses || !courseNumber){
            return courses;
        }
        return courses.filter(course=> course.catalog_nbr === courseNumber)
    }
}
