import { Component, inject } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  template: `
    <h2>Dashboard (Protected)</h2>
    <button (click)="logout()">Logout</button>
  `
})
export class DashboardComponent {
  private router = inject(Router);
  authService = inject(AuthService);

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
