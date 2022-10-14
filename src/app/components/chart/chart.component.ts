import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  filter: string = "";

  courses: Course[] = [
    {
      id: 0,
      name: 'Angular',
      teacher: 'Ricardo',
      start: new Date(2022, 2, 15),
      end: new Date(20022, 4, 16),
      ongoing: true,
      enrroll: false,
      img:'https://angular.io/assets/images/logos/angular/angular.png'
    },
    {
      id: 1,
      name: 'JavaScript',
      teacher: 'Leonardo',
      start: new Date(2022, 5, 24),
      end: new Date(20022, 7, 13),
      ongoing: true,
      enrroll: false,
      img: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'
    },
    {
      id: 2,
      name: 'Desarrollo Web',
      teacher: 'Rebecca',
      start: new Date(2022, 4, 3),
      end: new Date(20022, 6, 27),
      ongoing: false,
      enrroll: true,
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png'
    },
    {
      id: 3,
      name: 'ReactJS',
      teacher: 'Veronica',
      start: new Date(2022, 7, 2),
      end: new Date(20022, 12, 16),
      ongoing: true,
      enrroll: false,
      img: 'https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  edit() {

  }

  inscribe() {

  }

  remove() {
    
  }
}
