import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private tokenKey = 'auth_token';
  isAuthenticated = signal(false);

  constructor() {
    const token = localStorage.getItem(this.tokenKey);
    if (token) this.isAuthenticated.set(true);
  }

  login(username: string, password: string) {
    // Mock API (In real app, use HttpClient)
    if (username === 'admin' && password === 'admin123') {
      const fakeToken = 'FAKE-JWT-TOKEN';
      localStorage.setItem(this.tokenKey, fakeToken);
      this.isAuthenticated.set(true);
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
    this.isAuthenticated.set(false);
  }

  getToken() {
    return localStorage.getItem(this.tokenKey);
  }
}
