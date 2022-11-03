import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Course } from '../../models/course';

@Injectable()
export class CourseService {

  private courses: Course[] = [
    {
      id: 0,
      name: 'Angular',
      teacher: 'Ricardo',
      start: new Date(2022, 2, 15),
      end: new Date(20022, 4, 16),
      ongoing: true,
      enrroll: false,
      img:'https://angular.io/assets/images/logos/angular/angular.png',
      students: [{ 
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
       }
      ],
    },
    {
      id: 1,
      name: 'JavaScript',
      teacher: 'Leonardo',
      start: new Date(2022, 5, 24),
      end: new Date(20022, 7, 13),
      ongoing: true,
      enrroll: false,
      img: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
      students: [ { 
        name:'cesar', 
        lastname: 'figueras', 
        email: 'vefidaucekau-4691@yopmail.com',
        age:26, 
        grade: 7,
        status: false
       },    { 
        name:'rebecca', 
        lastname: 'sevillano', 
        email: 'kauxappammoijoi-7872@yopmail.com',
        age:27, 
        grade: 16,
        status: true
       }],
    },
    {
      id: 2,
      name: 'Desarrollo Web',
      teacher: 'Rebecca',
      start: new Date(2022, 4, 3),
      end: new Date(20022, 6, 27),
      ongoing: false,
      enrroll: true,
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png',
      students: [ { 
        name:'cesar', 
        lastname: 'figueras', 
        email: 'vefidaucekau-4691@yopmail.com',
        age:26, 
        grade: 7,
        status: false
       },    { 
        name:'rebecca', 
        lastname: 'sevillano', 
        email: 'kauxappammoijoi-7872@yopmail.com',
        age:27, 
        grade: 16,
        status: true
       }],
    },
    {
      id: 3,
      name: 'ReactJS',
      teacher: 'Veronica',
      start: new Date(2022, 7, 2),
      end: new Date(20022, 12, 16),
      ongoing: true,
      enrroll: false,
      img: 'https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png',
      students: [ { 
        name:'cesar', 
        lastname: 'figueras', 
        email: 'vefidaucekau-4691@yopmail.com',
        age:26, 
        grade: 7,
        status: false
       },    { 
        name:'rebecca', 
        lastname: 'sevillano', 
        email: 'kauxappammoijoi-7872@yopmail.com',
        age:27, 
        grade: 16,
        status: true
       }],
    },
  ]

  subjectCourses: BehaviorSubject<Course[]>;

  constructor() { 
    this.subjectCourses = new BehaviorSubject<Course[]>(this.courses);
  }
  
  getCourses() {
    this.subjectCourses.next( this.courses )
    return this.subjectCourses.asObservable()
  }

  getCourse( id:number ): Observable<Course[]> {
    return this.getCourses().pipe(
      map( (courses: Course[]) => courses.filter((course: Course) => course.id === id))
    )
  }

  addCourse( course: Course ) {
    this.courses.push(course);
    this.subjectCourses.next( this.courses );
  }

  editCourse(course: Course) {
    let indice = this.courses.findIndex( (obj: Course) => obj.id === course.id);

    if (indice > -1) {
      this.courses[indice] = course;

      this.subjectCourses.next(this.courses);
    }
  }

  deleteCourse(id: number) {
    let indice = this.courses.findIndex( (obj: Course) => obj.id === id);

    if (indice > -1) {
      this.courses.splice(indice, 1);

      this.subjectCourses.next(this.courses);
    }
  }
}



