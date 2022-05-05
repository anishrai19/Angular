import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Pract2Service } from './pract2.service';
import { PractService } from './pract.service';
import { FirstComponent } from './first/first.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, FirstComponent],
  imports: [BrowserModule, AppRoutingModule,FormsModule],
  providers: [ Pract2Service],
  bootstrap: [AppComponent],
})
export class AppModule {}
