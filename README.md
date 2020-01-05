# Angular 9 Akita Bookstore Application

## Installation

This project was updated with [Angular CLI](https://github.com/angular/angular-cli) to version 9.0.0-rc.7.

Update instructions can be found at https://next.angular.io/guide/updating-to-version-9.
 
**NodeJS and @ng/cli setup**
```
# set latest stable version of nodejs
nvm install 12.0.0
nvm use v12.0.0
# ng cli should be latest stable version
ng version # 9.0.0-rc.7
```

**Dependencies**
```
# angular material
ng add @angular/material

# akita and akita-cli
ng add @datorama/akita
npm install @datorama/akita-cli -g

# take until destroy helper
npm i ngx-take-until-destroy
```

**Config in package.json**

```
  "akitaCli": {
    "customFolderName": "true",
    "template": "angular",
    "basePath": "./src/app/"
  }
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

```
# auth 
ng g module auth --routing true --module app.module.ts
ng g component auth/containers/login-page --style scss
ng g guard auth/auth-guard --module auth.module.ts

# books
ng g module books --routing true --module app.module.ts
ng g component books/components/book-authors --style scss  --module books/books.module.ts
ng g component books/components/book-detail --style scss  --module books/books.module.ts
ng g component books/components/book-preview-list --style scss  --module books/books.module.ts
ng g component books/components/book-preview --style scss  --module books/books.module.ts
ng g component books/components/book-search --style scss  --module books/books.module.ts
ng g module books/components/books-components --module books/books.module.ts 

ng g component books/containers/collection-page --style scss --changeDetection=OnPush --module books/books.module.ts
ng g component books/containers/find-book --style scss --changeDetection=OnPush --module books/books.module.ts
ng g component books/containers/selected-book-page --style scss --changeDetection=OnPush --module books/books.module.ts
ng g component books/containers/view-book-page --style scss --changeDetection=OnPush --module books/books.module.ts
ng g module main/main --module app.module.ts

# main 
ng g component main/containers/layout --style scss --module main/main.module.ts
ng g component main/components/nav-item --style scss --module main/main.module.ts
ng g component main/components/toolbar --style scss --module main/main.module.ts
ng g component main/containers/app --style scss --module main/main.module.ts
ng g component main/containers/not-found-page --style scss --module main/main.module.ts
ng g component main/components/sidenav --style scss --module main/main.module.ts
ng g service main/services/google-books

# core/pipes
ng g module core/pipes --module books/components/books-components.module.ts
ng g pipe core/pipes/add-commas
ng g pipe core/pipes/ellipsis

# styling
ng g module styling/material --module app.module.ts
```

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## References
- https://angular.io
- https://material.angular.io/
- https://github.com/datorama/akita
- https://netbasal.gitbook.io/
- https://netbasal.gitbook.io/akita/enhancers/devtools
- https://engineering.datorama.com/i-built-the-ngrx-demo-app-with-akita-heres-the-result-57f83fe92192

**Virtual scrolling**
- https://github.com/orizens/ngx-infinite-scroll
- https://github.com/staskolukasz/ngx-infinite-scroller
- https://github.com/dhilt/ngx-ui-scroll
- https://github.com/christiannwamba/angular-infinite-scrolling
- https://medium.com/front-end-weekly/how-to-use-virtual-scrolling-using-angular-7-cdk-9802110111fa

**OpenAPI contracts for Google APIs**
- https://github.com/APIs-guru/google-discovery-to-swagger
- https://github.com/APIs-guru/openapi-directory
- https://github.com/APIs-guru/openapi-directory/tree/master/APIs/googleapis.com/books
- https://www.npmjs.com/package/ng-swagger-gen
- https://dev.to/florimondmanca/consuming-apis-in-angular--the-model-adapter-pattern-3fk5

**ngx-translate**
- https://www.codeandweb.com/babeledit/tutorials/how-to-translate-your-angular8-app-with-ngx-translate

**angular 9**
- https://next.angular.io/guide/updating-to-version-9
- https://medium.com/grapecity/what-to-expect-in-angular-9-a82810069000
- 

## Todo

**deployment**
- https://github.com/angular-schule/angular-cli-ghpages