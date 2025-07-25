import { Component, inject } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <h1>Angular 19 POC</h1>
    <nav>
      <a routerLink="/">Counter</a> | 
      <a routerLink="/users">Users</a> |
      <a routerLink="/dashboard">Dashboard</a> |
      <a *ngIf="!authService.isAuthenticated()" routerLink="/login">Login</a>
      <button *ngIf="authService.isAuthenticated()" (click)="logout()">Logout</button>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  authService = inject(AuthService);

  logout() {
    this.authService.logout();
  }
}
