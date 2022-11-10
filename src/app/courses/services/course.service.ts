import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Course } from '../../models/course';

@Injectable()


export class CourseService {

  constructor( 
    private http: HttpClient    
  ) {
    
  }

  getCourses(): Observable<Course[]>{
    return this.http.get<Course[]>(`${environment.api}/courses`, {
      headers: new HttpHeaders ({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    })
    .pipe(
      catchError(this.handleError)
    );
  }

  
  getId( id:number ): Observable<Course> {
    return this.http.get<Course>(`${environment.api}/courses/${id}`, {
      headers: new HttpHeaders ({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.handleError)
      );;
    }
    
    addCourse( course: Course ) {
      return this.http.post(`${environment.api}/courses/`,course).pipe(
        catchError(this.handleError)
        ).subscribe(console.log)
      }
      
    editCourse(course: Course) {
      return this.http.put<Course>(`${environment.api}/courses/${course.id}`, course).pipe(
        catchError(this.handleError)
      ).subscribe(console.log)
    }
        
    deleteCourse(id: number) {
      this.http.delete<Course>(`${environment.api}/courses/${id}`).pipe(
        catchError(this.handleError)
      ).subscribe(console.log);
    }

    private handleError(error: HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
        console.warn('Error del lado del cliente', error.error.message)
        } else {
          console.warn('Error del lado del servidor')
        }
        
      return throwError (() => new Error('Error en la comunicación http'))
    }
        
    getCourse( id:number ) {
          
    }
}
        