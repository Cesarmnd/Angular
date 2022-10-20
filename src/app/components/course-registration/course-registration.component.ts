import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-course-registration',
  templateUrl: './course-registration.component.html',
  styleUrls: ['./course-registration.component.css']
})
export class CourseRegistrationComponent implements OnInit {
  titularAlert: string = '';
  courseForm: FormGroup; 

  constructor( private fb: FormBuilder ) { 
    this.courseForm = fb.group({
      name: new FormControl('', [Validators.required]),
      teacher: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required, Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]),
      start: new FormControl('', [Validators.required ]),
      end: new FormControl('', [Validators.required ])
    }) 
  }

  ngOnInit(): void {
  }

  addCourse() {
    Swal.fire({
      title: 'Curso registrado con éxito',
      icon: 'success',
      color: '#fff',
      confirmButtonText: 'Ok',
      confirmButtonColor: '#9C27B0',
      background: '#424242'
    })
  }
}

