import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  studentsList: Array<Student> =[
    {name:'cesar', lastname: 'figueras', email: 'vefidaucekau-4691@yopmail.com',age:26, grade: 7},
    {name:'rebecca', lastname: 'sevillano', email: 'kauxappammoijoi-7872@yopmail.com',age:27, grade: 16},
    {name:'gustavo', lastname: 'climent', email: 'zisagrequoda-7553@yopmail.com',age:24, grade: 2},
    {name:'esteban', lastname: 'peralta', email: 'feumuttejette-6309@yopmail.com',age:22, grade: 15},
    {name:'baltasar', lastname: 'carrascosa', email: 'wicicixeda-5831@yopmail.com',age:21, grade: 9},
    {name:'jose', lastname: 'casado', email: 'xeyucroigenu-2635@yopmail.com',age:26, grade: 13},
    {name:'damian', lastname: 'paz', email: 'brexemouffoxe-7469@yopmail.com',age:23, grade: 14},
    {name:'jacobo', lastname: 'picazo', email: 'feunnequagregoi-8588@yopmail.com',age:21, grade: 20},
    {name:'antonio', lastname: 'pino', email: 'trefravexegau-3121@yopmail.com',age:24, grade: 11},
    {name:'susana', lastname: 'miguez', email: 'saxotteutreba-2615@yopmail.com',age:25, grade: 14},
    {name:'gracia', lastname: 'vasquez', email: 'trupoiloquiza-3783@yopmail.com',age:26, grade: 13},
    {name:'luz', lastname: 'ye', email: 'capriritebe-7387@yopmail.com',age:21, grade: 19}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
