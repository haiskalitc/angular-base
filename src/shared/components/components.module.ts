import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
      HeaderComponent,
      FooterComponent,
      NavComponent,
      NotFoundComponent,
  ],
  imports: [],
  exports:[
    HeaderComponent,
    FooterComponent,
    NavComponent,
    NotFoundComponent
  ]
})
export class SharedComponent {}
