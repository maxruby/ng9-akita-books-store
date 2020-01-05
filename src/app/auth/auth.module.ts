import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginPageComponent } from './containers/login-page/login-page.component';
import { LoginFormComponent } from './components/login-form/login-form.component';

import { AuthGuard } from './auth.guard';
import { MaterialModule } from '../styling/material/material.module';
import { AuthRoutingModule } from './auth-routing.module';

import { AuthQuery } from './state/auth.query';
import { AuthStore } from './state/auth.store';
import { AuthService } from './state/auth.service'; 

export const COMPONENTS = [LoginPageComponent, LoginFormComponent];

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, MaterialModule],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class AuthModule {
  static forRoot(): ModuleWithProviders<RootAuthModule> {
    return {
      ngModule: RootAuthModule,
      providers: [
        AuthService,
        AuthGuard,
        AuthQuery,
        AuthStore
      ]
    };
  }
}

@NgModule({
  imports: [AuthModule, AuthRoutingModule]
})
export class RootAuthModule { }
