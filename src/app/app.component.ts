// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   imports: [RouterOutlet],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent {
//   title = 'angular19-poc';
// }

// import { Component } from '@angular/core';
// import { CounterComponent } from './counter/counter.component';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [CounterComponent],
//   template: `
//     <h1>Angular 19 POC with Signals</h1>
//     <app-counter></app-counter>
//   `
// })
// export class AppComponent {}


import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <h1>Angular 19 POC</h1>
    <nav>
      <a routerLink="/">Counter</a> | 
      <a routerLink="/users">Users</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {}
