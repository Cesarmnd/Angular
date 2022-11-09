import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SesionService } from 'src/app/core/services/sesion.service';

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
      user: new FormControl(),
      password: new FormControl(),
      admin: new FormControl()
    })
  }

  ngOnInit(): void {
  }

  login() {
    this.sesionService.login(
      this.loginForm.value.user,
      this.loginForm.value.password,
      this.loginForm.value.admin
    )
    this.router.navigate(['home'])
  }


}
