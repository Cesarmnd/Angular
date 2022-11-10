import { Component, OnInit } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Course } from 'src/app/models/course';
import { CourseService } from 'src/app/courses/services/course.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  filter: string = "";
  courses$!: Observable<Course[]>;

  constructor(
    private courseService: CourseService,
    private router: Router
  ) {    
                                                                                                                                                               
  }
  
  ngOnInit(): void {
    this.courses$ = this.courseService.getCourses();
  }

  addCourse() {
    this.router.navigate(['courses/create'])
  }

  edit( course: Course) {
    this.router.navigate(['courses/edit', {
      id: course.id,
      name: course.name,
      teacher: course.teacher,
      start: course.start,
      end: course.end,
      img: course.img
    }
  ])
  }

  remove(id: number) {
    this.courseService.deleteCourse(id)
    this.courses$ = this.courseService.getCourses();
  }

}
