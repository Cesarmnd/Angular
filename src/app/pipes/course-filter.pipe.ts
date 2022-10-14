import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../models/course';

@Pipe({
  name: 'courseFilter'
})
export class CourseFilterPipe implements PipeTransform {

  transform(course: Course[], filter: string): Course[] {
    return course.filter( obj => obj.name.toLocaleLowerCase().includes(filter) 
    || obj.teacher.toLocaleLowerCase().includes(filter)
    || (obj.start.getMonth() + 1) === parseInt(filter)
    );
  }

}
