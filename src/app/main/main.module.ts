import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppComponent } from './containers/app/app.component';
import { NotFoundPageComponent } from './containers/not-found-page/not-found-page.component';
import { LayoutComponent } from './components/layout/layout.component';
import { NavItemComponent } from './components/nav-item/nav-item.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MaterialModule } from '../styling/material/material.module';

import { GoogleBooksService } from './services/google-books.service';
import { BooksService } from '../books/state/books.service';
import { BooksStore} from '../books/state/books.store';
import { BooksQuery} from '../books/state/books.query';

import { LayoutService } from './state/layout.service';
import { LayoutStore } from './state/layout.store';
import { LayoutQuery } from './state/layout.query';

// import ngx-translate and the http loader
import {TranslateCompiler, TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient} from '@angular/common/http';
// import ngx-translate-messageformat-compiler
import {TranslateMessageFormatCompiler} from 'ngx-translate-messageformat-compiler';

// AoT requires an exported function for factories
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, '../assets/i18n/', '.json');
}

export const COMPONENTS = [
  AppComponent,
  NotFoundPageComponent,
  LayoutComponent,
  NavItemComponent,
  SidenavComponent,
  ToolbarComponent
];
 
@NgModule({
  imports: [CommonModule, RouterModule, MaterialModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [HttpClient]
      },
       // compiler configuration
       compiler: {
        provide: TranslateCompiler,
        useClass: TranslateMessageFormatCompiler
      }
    })
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class MainModule {
  static forRoot() { 
    return {
      ngModule: MainModule,
      providers: [ GoogleBooksService, BooksService, BooksStore, BooksQuery, LayoutService, LayoutStore, LayoutQuery ],
    };
  }
}
