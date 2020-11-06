import { Courses } from './../Courses';
import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name:'subjectFilter'
})

export class SubjectFilterPipe implements PipeTransform{
    transform(courses:Courses[], subject:string): Courses[]{
        if(!courses || !subject){
            return courses;
        }
        return courses.filter(course=> course.subject.toUpperCase() === subject.toUpperCase())
    }
}
