import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import {
  AppComponent,
  CustomSnackBarComponent,
  DialogExampleComponent,
} from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ScrollingModule } from '@angular/cdk/scrolling';
// import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [AppComponent, DialogExampleComponent, CustomSnackBarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    ScrollingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
