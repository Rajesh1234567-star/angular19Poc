import { Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authGuard } from './auth.guard';

export const appRoutes: Routes = [
  { path: '', component: CounterComponent },
  { path: 'users', component: UserComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [authGuard] },
  { path: '**', redirectTo: '' }
];
