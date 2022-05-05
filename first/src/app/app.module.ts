import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemoComponent } from './Mycomponent/demo/demo.component';

@NgModule({
  // declaration tell us which component are inside this module
  // one component can belong to one module
  //if the component is needed in multiple module , export the component

  declarations: [AppComponent, DemoComponent],

  //import module-- import the module this module is depend on
  imports: [BrowserModule],
  //Provider module-- declare which injectable are used in the modules
  providers: [],
  // which is the component we want to load by default
  bootstrap: [AppComponent],
  //make visile/accesseable to other modules
  exports: [AppComponent],
})
export class AppModule {}
