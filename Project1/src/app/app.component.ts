import { Component } from '@angular/core';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Project1';
  name = 'Anish Rai';
  company = 'Coditas';
  EmployeeId = 'co2324';

  letters = '0123456789ABCDEF';
  color="";
  getRandomColor() {
    this.color = '#';

    for (var i = 0; i < 6; i++) {
      this.color += this.letters[Math.floor(Math.random() * 16)];
      
    }
  }
}
