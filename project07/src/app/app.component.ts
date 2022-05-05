import { Component } from '@angular/core';

export interface Idetails {
  name:string;
  info:string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'project07';
  info = '';

  details = [
    { name: 'mango', info: 'this is a mango' },
    { name: 'apple', info: 'this is a apple' },
    { name: 'grapes', info: 'this is a grapes' },
    { name: 'orange', info: 'this is a orange' },
    { name: 'banana', info: 'this is a banana' },
  ];
  itemClick(index: number) {
    this.info = this.details[index].info;
  }
}
