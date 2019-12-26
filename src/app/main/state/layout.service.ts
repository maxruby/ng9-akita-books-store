import { Injectable } from '@angular/core';
import { LayoutStore } from './layout.store';

@Injectable({ providedIn: 'root' })
export class LayoutService {

  constructor(private layoutStore: LayoutStore) { }

  setSideNavState(status: boolean) {
    this.layoutStore.updateSideNavState(status);
  }
}
