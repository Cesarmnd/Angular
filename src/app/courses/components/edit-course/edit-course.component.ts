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
  id!: number;

  constructor(
    private courseService: CourseService,
    private router: Router,
    private activatedRoute: ActivatedRoute 
  ) { 
    
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe( obj => { 
      this.id = parseInt(obj.get('id') || '0');
      this.courseEditForm = new FormGroup({
        name: new FormControl( obj.get('name'), [Validators.required]),
        teacher: new FormControl(obj.get('teacher'), [Validators.required]),
        image: new FormControl(obj.get('img'), [Validators.required, Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]),
        start: new FormControl(obj.get('start'), [Validators.required ]),
        end: new FormControl(obj.get('end'), [Validators.required ]),
        ongoing: new FormControl(obj.get('ongoing')),
        enrroll: new FormControl(obj.get('enroll')),
      }) 
    })
  }

  editCourse() {
    let obj: Course = {
      id: this.id,
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
