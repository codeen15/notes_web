import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  name?: string;
  email?: string;
  password?: string;

  isRegistering: boolean = false;

  constructor(private route: Router, private authService: AuthService) { }

  async register() {
    this.isRegistering = true;

    const res = await this.authService.register(this.name!, this.email!, this.password!);

    if (res) {
      this.route.navigateByUrl('login');
    }


    this.isRegistering = false;
  }

  navigateToLogin() {
    this.route.navigateByUrl('login');
  }
}
