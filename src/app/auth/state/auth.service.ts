import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthStore, User } from './auth.store';
import { tap, map, catchError } from 'rxjs/operators';
import { of, Observable, throwError } from 'rxjs';

export type Creds = { password: string, username: string };

@Injectable({ providedIn: 'root' })
export class AuthService {

  constructor(private authStore: AuthStore,private router: Router) { }

  login(creds: Creds) {
    return this.callServer(creds).pipe(
      map(user => {
        this.authStore.login(user);
        this.router.navigate(['/']);
      }),
      catchError(error => of(error))
    );
  }

  logout() {
    this.authStore.logout();
    this.router.navigate(['/login']);
  }

  /**
   * 
   * Simulate server call
   */
  private callServer({ username, password }: Creds): Observable<User> {
    if (username !== 'test') {
      return throwError('Invalid username or password');
    }

    return of({ name: 'User' });
  }
}
