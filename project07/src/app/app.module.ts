import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { TextComponent } from './text/text.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    ListComponent,
    ItemComponent,
    TextComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
