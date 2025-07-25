// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class UserService {

//   constructor() { }
// }

import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class UserService {
  users = signal<any[]>([]);
  loading = signal(false);

  constructor(private http: HttpClient) {}

  fetchUsers() {
    this.loading.set(true);
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe(data => {
        this.users.set(data);
        this.loading.set(false);
      });
  }
}
