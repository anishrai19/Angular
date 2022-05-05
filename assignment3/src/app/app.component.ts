import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'assignment3';

  users = [
    { name: 'anish', isActive: true },
    { name: 'rahul', isActive: false },
    { name: 'rajesh', isActive: false },
    { name: 'ramesh', isActive: true },
    { name: 'manish', isActive: true },
    { name: 'mit', isActive: false },
  ];
  changeState(index: number) {
    this.users[index].isActive = !this.users[index].isActive;
  }
}
