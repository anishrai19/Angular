import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'assignment6';

  // i:any=10;
  // j:unknown=10;

  // index:string=this.i;
  // jndex:string=this.j as string;

  // console.log(i.fun());
 
  valueB:number = 0;
  valueC:number = 0;
  incrementB() {
    this.valueB += 1;
  }
  incrementC() {
    this.valueC += 1;
  }
}
