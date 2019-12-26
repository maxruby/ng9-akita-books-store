import { Injectable } from '@angular/core';
import { Query, toBoolean } from '@datorama/akita';
import { AuthStore, AuthState } from './auth.store';

@Injectable({ providedIn: 'root' })
export class AuthQuery extends Query<AuthState> {

  isLoggedIn$ = this.select(state => toBoolean(state.user));

  constructor(protected store: AuthStore) {
    super(store);
  }

}
