import { Component, OnInit} from '@angular/core';
import { Student } from 'src/app/models/student';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  
  studentsList: Array<Student> =[

  ]

  constructor() { 
 
  }

  ngOnInit(): void {

  }

  handleEvent() {
  }
}
