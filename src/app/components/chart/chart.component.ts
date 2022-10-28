import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, of } from 'rxjs';
import { Course } from 'src/app/models/course';
import { CourseService } from 'src/app/services/course.service';

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
    private courseService: CourseService
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
    let course: Course = {
      id: 4,
      name: 'VueJs',
      teacher: 'Oscar',
      start: new Date(),
      end: new Date(),
      ongoing: false,
      enrroll: true,
      img: '',
      students: [
        { 
          name:'rebecca', 
          lastname: 'sevillano', 
          email: 'kauxappammoijoi-7872@yopmail.com',
          age:27, 
          grade: 16,
          status: true
         }
      ]
    }
    this.courseService.addCourse(course)
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

  inscribe() {

  }

  remove() {
    
  }

  addStudent() {

  }

}
