import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private tokenKey = 'auth_token';
  private expiryKey = 'token_expiry';
  isAuthenticated = signal(false);

  constructor() {
    const token = localStorage.getItem(this.tokenKey);
    const expiry = localStorage.getItem(this.expiryKey);
    if (token && expiry && +expiry > Date.now()) {
      this.isAuthenticated.set(true);
    } else {
      this.logout();
    }
  }

  login(username: string, password: string) {
    if (username === 'admin' && password === 'admin123') {
      const fakeToken = 'FAKE-JWT-TOKEN';
      const expiry = Date.now() + 5 * 60 * 1000; // 5 min expiry
      localStorage.setItem(this.tokenKey, fakeToken);
      localStorage.setItem(this.expiryKey, expiry.toString());
      this.isAuthenticated.set(true);
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.expiryKey);
    this.isAuthenticated.set(false);
  }

  getToken() {
    return localStorage.getItem(this.tokenKey);
  }

  isTokenExpired() {
    const expiry = localStorage.getItem(this.expiryKey);
    return !expiry || +expiry < Date.now();
  }
}
