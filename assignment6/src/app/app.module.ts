import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewComponentDemoComponent } from './new-component-demo/new-component-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    NewComponentDemoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
