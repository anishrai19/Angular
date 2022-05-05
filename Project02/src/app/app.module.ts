import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ImgDetailComponent } from './img-detail/img-detail.component';
import { Service02Service } from './service02.service';

@NgModule({
  declarations: [
    AppComponent,
    ImgDetailComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [Service02Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
