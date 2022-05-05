import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LeaveDetailComponent } from './leave-detail/leave-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LeaveDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
