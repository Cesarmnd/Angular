import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/students/services/student.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  hide = true;
  titularAlert: string = '';
  userForm: FormGroup; 
  validate!: boolean; 

  constructor( 
    private fb: FormBuilder,
    private studentService: StudentService
    ) { 
    this.userForm = fb.group({
      name: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required,Validators.email, Validators.pattern('[a-z0-9]+@[a-z]+\.[a-z]{2,3}') ]),
      phone: new FormControl('', [Validators.required ]),
      password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern('^.*[A-Z]+.*$') ]),
      validation: new FormControl('', [Validators.required]),
      admin: new FormControl(false, [])
    })    
  }

  ngOnInit(): void {
  }

  compare() {
    return !(this.userForm.value.password === this.userForm.value.validation)
  }

  addUser() {
    Swal.fire({
      title: 'Usuario registrado con éxito',
      icon: 'success',
      color: '#fff',
      confirmButtonText: 'Ok',
      confirmButtonColor: '#9C27B0',
      background: '#424242'
    })
  }
}
