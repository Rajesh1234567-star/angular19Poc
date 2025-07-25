// import { Routes } from '@angular/router';

// export const routes: Routes = [];


import { Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { UserComponent } from './user/user.component';

export const appRoutes: Routes = [
  { path: '', component: CounterComponent },
  { path: 'users', component: UserComponent }
];
