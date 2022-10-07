import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  userForm: FormGroup;
  equalTo!: boolean;

  constructor(private fb: FormBuilder) {
   this.userForm = fb.group({
    name: new FormControl('', [Validators.required]),
    pass: new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern('^.*[A-Z]+.*$')]),
    verif: new FormControl('', [ Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required, Validators.pattern('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')]),
    auth: new FormControl(false, []),
   })
  }

  ngOnInit(): void {
  }

  evaluate() { 
    const userPass = this.userForm.value.pass;
    const validPass = this.userForm.value.verif;
    return userPass === validPass;
  }

  addUser() {
    console.log(this.userForm);
    alert('Usuario registrado con éxito');
    this.userForm.reset();
  }

}
