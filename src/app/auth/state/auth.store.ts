import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { resetStores } from '@datorama/akita'; 

export interface User {
  name: string;
}

export interface AuthState {
  user: User | null;
}

export function createInitialState(): AuthState {
  return {
     user: JSON.parse(localStorage.getItem('user')) || null
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'auth' })
export class AuthStore extends Store<AuthState> {

  constructor() {
    super(createInitialState());
  }

  login(user: User) {
    this.update({ user });
    /** In real life, you will abstract this to service. */
    localStorage.setItem('user', JSON.stringify(user));
  }

  logout() {
    /** In real life, you will abstract this to service. */
    // localStorage.removeItem('user');
    localStorage.clear();
    resetStores();
    this.update(createInitialState());
  }

}

