import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/models/course';
import Swal from 'sweetalert2';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {
  titularAlert: string = '';
  courseEditForm!: FormGroup; 
  course!: Course;

  constructor(
    private courseService: CourseService,
    private router: Router,
    private activatedRoute: ActivatedRoute 
  ) { 
    
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe( obj => { 
      console.log(obj.get('id'))
      this.course = {
        id: parseInt( obj.get('id') || '0' ),
        name: obj.get('name') || '',
        teacher: obj.get('teacher') || '',
        img: obj.get('img') || '',
        start: new Date(obj.get('start') || ''),
        end: new Date(obj.get('end') || ''),
        ongoing: obj.get('ongoing') === 'true',
        enrroll: obj.get('enroll') === 'true',
        students: []
      }

      this.courseEditForm = new FormGroup({
        name: new FormControl( this.course.name),
        teacher: new FormControl(this.course.teacher),
        image: new FormControl(this.course.img),
        start: new FormControl(this.course.start),
        end: new FormControl(this.course.end),
        ongoing: new FormControl(this.course.ongoing),
        enrroll: new FormControl(this.course.enrroll),
      }) 
    })
  }

  editCourse() {
    let obj: Course = {
      id: this.course.id,
      name: this.courseEditForm.value.name,
      teacher: this.courseEditForm.value.teacher,
      img: this.courseEditForm.value.image,
      start: this.courseEditForm.value.start,
      end: this.courseEditForm.value.end,
      ongoing: this.courseEditForm.value.enroll,
      enrroll: this.courseEditForm.value.enrroll,
      students: []
    }

    this.courseService.editCourse(obj);
    
    this.router.navigate(['courses', 'list'])
    Swal.fire({
      title: 'Curso editado con éxito',
      icon: 'success',
      color: '#fff',
      confirmButtonText: 'Ok',
      confirmButtonColor: '#9C27B0',
      background: '#424242'
    })
  }
}
