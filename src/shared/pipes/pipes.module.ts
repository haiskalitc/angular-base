import { NgModule } from '@angular/core';
import { DateFormatPipe } from './date-pipe/date.pipe';

@NgModule({
  declarations: [
    DateFormatPipe
  ],
  imports: [
  ],
  exports:[
    DateFormatPipe
  ]
})
export class PipeModule {}
