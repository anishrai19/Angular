import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TextComponent } from './text/text.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { DetailsComponent } from './details/details.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TextComponent,
    ListComponent,
    ItemComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
