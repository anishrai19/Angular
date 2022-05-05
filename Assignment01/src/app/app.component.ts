import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Assignment01';
  name = 'Anish Kumar Rai';
  nameId = 'given_id';
  color = 'white';
  users=[{
    name:'anish',isActive:true },
    
  ]

  onClickListener(e: any) {
    console.log('clicked');
  }
  failed = false;

  onChildBox(color: string) {
    this.color = color;
  }
}
