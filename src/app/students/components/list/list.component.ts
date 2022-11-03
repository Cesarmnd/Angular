import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/students/services/student.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {
  students!: Student[];
  subscription: any;

  columns: string[] = [ 'name', 'lastname', 'email', 'age', 'grade', 'state', 'action' ];
  dataSource: MatTableDataSource<Student> = new MatTableDataSource<Student>(this.students);

  constructor(
    private studentService: StudentService,
    private router: Router
  ) { 
    this.subscription = studentService.getStudents()
    .subscribe({
      next: ( obj: Student[] ) => {
        this.students = obj;
      },
      error: (error) => {
        console.log(error);
      }
    })     
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void { 
    this.subscription.unsubscribe()
  } 

  editStudent() {
 
  }

  deleteStudent() {

  }

  addStudent() {
    this.router.navigate(['courses/create'])
  }
}
