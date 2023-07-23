import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email?: string;
  password?: string;

  isLogingIn: boolean = false;

  constructor(private route: Router, private authService: AuthService) { }

  async login() {
    this.isLogingIn = true;

    const res = await this.authService.login(this.email!, this.password!);

    if (res) {
      this.route.navigateByUrl('dashboard');
    }


    this.isLogingIn = false;
  }

  navigateToRegister() {
    this.route.navigateByUrl('register');
  }
}
