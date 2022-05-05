import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppUserStatusComponent } from './app-user-status/app-user-status.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, AppUserStatusComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
