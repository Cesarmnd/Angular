import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Student } from 'src/app/models/student';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  students: Student[] = [
    { 
     name:'cesar', 
     lastname: 'figueras', 
     email: 'vefidaucekau-4691@yopmail.com',
     age:26, 
     grade: 7,
     status: false
    },
    { 
     name:'rebecca', 
     lastname: 'sevillano', 
     email: 'kauxappammoijoi-7872@yopmail.com',
     age:27, 
     grade: 16,
     status: true
    },
    { 
     name:'gustavo', 
     lastname: 'climent', 
     email: 'zisagrequoda-7553@yopmail.com',
     age:24, 
     grade: 2,
     status: false
    },
    { 
     name:'esteban', 
     lastname: 'peralta', 
     email: 'feumuttejette-6309@yopmail.com',
     age:22, 
     grade: 15,
     status: true
    },
    { 
     name:'baltasar', 
     lastname: 'carrascosa',  
     email: 'wicicixeda-5831@yopmail.com',
     age:21, 
     grade: 9,
     status: false
    },
    { 
     name:'jose', 
     lastname: 'casado', 
     email: 'xeyucroigenu-2635@yopmail.com',
     age:26, 
     grade: 13,
     status: true
    },
    { 
     name:'damian', 
     lastname: 'paz', 
     email: 'brexemouffoxe-7469@yopmail.com',
     age:23, 
     grade: 14,
     status: true
    },
    { 
     name:'jacobo', 
     lastname: 'picazo', 
     email: 'feunnequagregoi-8588@yopmail.com',
     age:21, 
     grade: 20,
     status: true
    },
    { 
     name:'antonio', 
     lastname: 'pino', 
     email: 'trefravexegau-3121@yopmail.com',
     age:24, 
     grade: 11,
     status: true
    },
    { 
     name:'susana', 
     lastname: 'miguez', 
     email: 'saxotteutreba-2615@yopmail.com',age:25, 
     grade: 14,
     status: true
    },
    { 
     name:'gracia', 
     lastname: 'vasquez', 
     email: 'trupoiloquiza-3783@yopmail.com',age:26, 
     grade: 13,
     status: true
    },
    { 
     name:'luz', 
     lastname: 'ye', 
     email: 'capriritebe-7387@yopmail.com',age:21, 
     grade: 19,
     status: true
    }
  ]

  columns: string[] = [ 'name', 'lastname', 'email', 'age', 'grade', 'state', 'action' ];
  dataSource: MatTableDataSource<Student> = new MatTableDataSource<Student>(this.students);

  constructor() { }

  ngOnInit(): void {
  }

  nameFilter(event: Event) {
    const getData = (event.target as HTMLInputElement).value;
    this.dataSource.filterPredicate = function( student: Student, filter: string) {
      return student.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()) 
    };
    this.dataSource.filter = getData.trim().toLocaleLowerCase()
  }

  editField() {

  }

  deleteField() {

  }

  addField() {
    
  }
}