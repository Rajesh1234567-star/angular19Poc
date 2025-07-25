import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  template: `
    <h2>Login</h2>
    <form (ngSubmit)="onLogin()">
      <input [(ngModel)]="username" name="username" placeholder="Username" required />
      <input [(ngModel)]="password" name="password" type="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
    <p *ngIf="error" style="color:red">{{error}}</p>
  `
})
export class LoginComponent {
  private router = inject(Router);
  authService = inject(AuthService);

  username = '';
  password = '';
  error = '';

  onLogin() {
    const success = this.authService.login(this.username, this.password);
    if (success) {
      this.router.navigate(['/dashboard']);
    } else {
      this.error = 'Invalid username or password';
    }
  }
}
