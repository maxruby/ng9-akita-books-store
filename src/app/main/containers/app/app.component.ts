import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthQuery } from '../../../auth/state/auth.query';
import { AuthService } from '../../../auth/state/auth.service';
import { LayoutQuery } from '../../state/layout.query';
import { LayoutService } from '../../state/layout.service';
import { BooksService } from '../../../books/state/books.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  showSidenav$: Observable<boolean>;
  loggedIn$: Observable<boolean>;

  constructor(private authQuery: AuthQuery,
    private authService: AuthService,
    private bookService: BooksService,
    private layoutQuery: LayoutQuery,
    private layoutService: LayoutService) {
    
  }

  ngOnInit() {
    this.showSidenav$ = this.layoutQuery.sideNavOpen$;
    this.loggedIn$ = this.authQuery.isLoggedIn$;
    this.bookService.loadBooksToStore();
  }

  closeSidenav() {
    this.layoutService.setSideNavState(false);
  }

  openSidenav() {
    this.layoutService.setSideNavState(true);
  }

  logout() {
    this.closeSidenav();
    this.authService.logout();
  }
}
