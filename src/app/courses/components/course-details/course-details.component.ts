import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/models/course';
import { Observable } from 'rxjs'
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  course$!: Observable<Course>

  constructor(
    private activateRoute: ActivatedRoute,
    private courseService: CourseService
  ) { }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe( obj => {
      let id = parseInt(obj.get('id') || '0')
      this.course$ = this.courseService.getId(id)
      console.log(obj.get('id'))
    })
  }
}

