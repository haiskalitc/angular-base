import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '../core/guard/auth-guard.service';
import { SharedComponent } from '../shared/components/components.module';
import { NotFoundComponent } from '../shared/components/not-found/not-found.component';
import { SharedModule } from '../shared/modules/modules';
import { PipeModule } from '../shared/pipes/pipes.module';

/* INTERCEPTOR */
import { AuthInterceptorService } from '../core/interceptor/auth-interceptor.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';

// routes
const routes: Routes = [
  {
    path: 'home',
    canActivate: [AuthGuardService],
    loadChildren: () =>
      import('./pages/home/home.module').then((module) => module.HomeModule),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    /* CORE */
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,

    /* Shared*/
    PipeModule, // pipe
    SharedModule, // module
    SharedComponent, // component

    /* 3rd Party*/
  ],
  providers: [
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: AuthInterceptorService,
    //   multi: true
    // }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
