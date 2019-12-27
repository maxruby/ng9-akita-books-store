import { Component } from '@angular/core';
import { Creds } from '../../state/auth.service';
import { AuthService } from '../../state/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  constructor(private authService: AuthService) { }

  ngOnInit() { }

  onSubmit(creds: Creds) {
    this.authService.login(creds).subscribe();
  }

}
