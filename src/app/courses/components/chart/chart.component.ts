import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, of } from 'rxjs';
import { Course } from 'src/app/models/course';
import { CourseService } from 'src/app/courses/services/course.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit, OnDestroy {
  filter: string = "";
  courses!: Course[];
  subscription: any;

  constructor(
    private courseService: CourseService,
    private router: Router
  ) {    
    this.subscription =  courseService.getCourses()
    .subscribe({
      next: ( obj: Course[] ) => {
        this.courses = obj;
      },
      error: (error) => {
        console.log(error);
      }
    })                                                                                                                                                                   
  }
  
  ngOnInit(): void {
  }

  ngOnDestroy(): void { 
    this.subscription.unsubscribe()
  } 

  addCourse() {
    this.router.navigate(['courses/create'])
  }

  getValue(event: Event): any {
    this.filter = (event.target as HTMLInputElement).value;

    of(this.courses)
    .pipe(
      map((courses: Course[]) => this.courses.filter((course: Course) =>  course.name.toLocaleLowerCase().includes(this.filter.toLocaleLowerCase().trim())
      ))
    )
    .subscribe((obj) => {
      if (obj.length > 0 && this.filter != '') {
        this.courses = obj;
      } else {
        this.courseService.getCourses();
      }
    });
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
  }

}
