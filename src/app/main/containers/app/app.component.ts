import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthQuery } from '../../../auth/state/auth.query';
import { AuthService } from '../../../auth/state/auth.service';
import { LayoutQuery } from '../../state/layout.query';
import { LayoutService } from '../../state/layout.service';
import { BooksService } from '../../../books/state/books.service';
import { TranslateService } from '@ngx-translate/core';

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
    private layoutService: LayoutService,
    private translate: TranslateService) {
      // this language will be used as a fallback when a translation isn't found in the current language
      this.translate.setDefaultLang('en');
      // the lang to use, if the lang isn't available, it will use the current loader to get them
      this.translate.use('en');
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
