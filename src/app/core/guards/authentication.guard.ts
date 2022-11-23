import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Sesion } from 'src/app/models/sesion';
import { SesionService } from '../services/sesion.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

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
        if(sesion.activeSesion) {
          return true
        } else {
          alert('No tiene permisos para ver esta pagina')
          this.router.navigate(['authentication/login'])
          return false
        }
      })
    );
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state:RouterStateSnapshot): Observable<boolean | UrlTree> | boolean | UrlTree  {
    return this.sesion.getSesion().pipe(
      map((sesion: Sesion) => {
        if(sesion.activeUser?.canActivateChild) {
          return true
        } else {
          alert('No tiene permisos para ver esta pagina')
          this.router.navigate(['authentication/login'])
          return false
        }
      })
    )}
    ;

    canLoad(
      childRoute: ActivatedRouteSnapshot,
      state:RouterStateSnapshot): Observable<boolean | UrlTree> | boolean | UrlTree {

        return this.sesion.getSesion().pipe(
          map((sesion: Sesion) => {
            if(sesion.activeUser?.canLoad) {
              return true
            } else {
              alert('No tiene permisos para ver esta pagina')
              this.router.navigate(['authentication/login'])
              return false
            }
          })
        );

    }
}


