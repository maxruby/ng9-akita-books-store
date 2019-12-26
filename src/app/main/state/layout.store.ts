import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface LayoutState {
  sideNavOpen: boolean;
}

export function createInitialState(): LayoutState {
  return {
    sideNavOpen: false
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'layout' })
export class LayoutStore extends Store<LayoutState> {

  constructor() {
    super(createInitialState());
  }
  
  updateSideNavState(status: boolean) {
    this.update({ sideNavOpen: status });
  }
}

