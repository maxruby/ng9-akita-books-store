import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, take, switchMap } from 'rxjs/operators';
import { AuthQuery } from './state/auth.query'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authQuery: AuthQuery, private router: Router) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
      return this.authQuery.isLoggedIn$.pipe(
        take(1),
        switchMap((isLoggedIn) => {
          if (!isLoggedIn) {
            this.router.navigate(['/login']);
          }
          return of(isLoggedIn);
        })
      );
  }

}
