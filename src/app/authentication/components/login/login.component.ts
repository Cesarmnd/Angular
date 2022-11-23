import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SesionService } from 'src/app/core/services/sesion.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup

  constructor(
    private sesionService: SesionService,
    private router: Router
  ) { 
    this.loginForm = new FormGroup({
      user: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      admin: new FormControl(),
      canActivateChild: new FormControl(true),
      canLoad: new FormControl(true)
    })
  }

  ngOnInit(): void {
  }

  login() {
    let user: User = {
      id: 0,
      user: this.loginForm.value.user,
      password: this.loginForm.value.password,
      admin: this.loginForm.value.admin,
      canActivateChild: this.loginForm.value.canActivateChild,
      canLoad: this.loginForm.value.canLoad
    }
    this.sesionService.login(user)
    
    this.router.navigate(['home'])
  }


}
