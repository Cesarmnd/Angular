import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Sesion } from 'src/app/models/sesion';
import Swal from 'sweetalert2';
import { SesionService } from '../services/sesion.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor (
    private sesion: SesionService,
    private router: Router
  ) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.sesion.getSesion().pipe(
        map((sesion: Sesion) => {
          if(sesion.activeUser?.admin) {
            return true
          } else {
            Swal.fire({
              title: '¡No cuenta con permisos necesarios!',
              icon: 'error',
              color: '#fff',
              confirmButtonText: 'Ok',
              confirmButtonColor: '#9C27B0',
              background: '#424242'
            })
            return false
          }
        })
      );
  }
  
}
