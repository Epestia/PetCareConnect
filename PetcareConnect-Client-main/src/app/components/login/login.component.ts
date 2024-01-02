import { Component } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  pseudoUtilisateur = '';
  password = '';
  selectedRole = 'client';
  numeroVet = '';

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    if (this.authService.login(this.pseudoUtilisateur, this.password)) {
      this.router.navigateByUrl('home').then(() => {
        window.location.reload();
      });
    }
  }
}
