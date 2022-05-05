import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'assignment2';
  start = 0;

  countleft = 0;
  countright = 0;

  changeleft() {
    this.countright = this.countright + 1;
  }
  changeright() {
    this.countleft++;
  }
}
