import { Injectable } from '@angular/core';
import { Sesion } from 'src/app/models/sesion';
import { BehaviorSubject, Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class SesionService {
  sesionSubject!: BehaviorSubject<Sesion>

  constructor() {
    const sesion: Sesion = {
      activeSesion: false
    }
    this.sesionSubject = new BehaviorSubject(sesion)
   }


  login( user: string, password: string, admin: boolean) {
    const sesion: Sesion = {
      activeSesion: true,
      activeUser: {
        user,
        password,
        admin
      }
    }
    this.sesionSubject.next(sesion)
  }

  getSesion() : Observable<Sesion> {
    return this.sesionSubject.asObservable()
  }
}
