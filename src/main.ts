// import { bootstrapApplication } from '@angular/platform-browser';
// import { provideHttpClient } from '@angular/common/http';
// import { provideRouter } from '@angular/router';
// import { AppComponent } from './app/app.component';
// import { appRoutes } from './app/app.routes';

// bootstrapApplication(AppComponent, {
//   providers: [
//     provideHttpClient(),
//     provideRouter(appRoutes)
//   ]
// }).catch(err => console.error(err));

import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { appRoutes } from './app/app.routes';
import { authInterceptor } from './app/auth.interceptor';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withInterceptors([authInterceptor])),
    provideRouter(appRoutes)
  ]
}).catch(err => console.error(err));
