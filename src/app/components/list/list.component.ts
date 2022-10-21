import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  students!: Student[] 

  columns: string[] = [ 'name', 'lastname', 'email', 'age', 'grade', 'state', 'action' ];
  dataSource: MatTableDataSource<Student> = new MatTableDataSource<Student>(this.students);

  constructor(
    private studentService: StudentService
  ) { 
    studentService.getStudents()
    .then((arr: Student[])=> {
      this.students = arr;
      console.log('done')
    })
    .catch((error: any) => {
      console.error(error)
    })
  }

  ngOnInit(): void {

  }

  editField() {

  }

  deleteField() {

  }

  addField() {
    
  }
}
