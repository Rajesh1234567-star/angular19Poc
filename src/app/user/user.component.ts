import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>User List</h2>
    <button (click)="userService.fetchUsers()">Load Users</button>
    <div *ngIf="userService.loading()">Loading...</div>
    <ul>
      <li *ngFor="let user of userService.users()">
        {{ user.name }} ({{ user.email }})
      </li>
    </ul>
  `
})
export class UserComponent implements OnInit {
  userService = inject(UserService);

  ngOnInit() {
    this.userService.fetchUsers();
  }
}
