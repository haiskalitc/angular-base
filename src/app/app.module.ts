import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from 'src/core/guard/auth-guard.service';
import { SharedComponent } from 'src/shared/components/components.module';
import { NotFoundComponent } from 'src/shared/components/not-found/not-found.component';
import { SharedModule } from 'src/shared/modules/modules';
import { PipeModule } from 'src/shared/pipes/pipes.module';

/* INTERCEPTOR */
import { AuthInterceptorService } from 'src/core/interceptor/auth-interceptor.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';

// routes
const routes: Routes = [
  {
    path: 'home',
    canActivate: [AuthGuardService],
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
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
