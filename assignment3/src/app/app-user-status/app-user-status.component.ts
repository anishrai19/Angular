import { Component, Input, Output, EventEmitter } from '@angular/core';


interface Iuser{
  name:string;
  isActive:boolean;
}
@Component({
  templateUrl: './app-user-status.component.html',
  styleUrls: ['./app-user-status.component.scss'],
  selector: 'app-user-status',
})
export class AppUserStatusComponent {

  @Input() users:Iuser[]=[];
    @Output() onUserClicked= new EventEmitter;


  // users = [
  //   { name: 'anish', isActive: true },
  //   { name: 'rahul', isActive: false },
  //   { name: 'rajesh', isActive: false },
  //   { name: 'ramesh', isActive: true },
  //   { name: 'manish', isActive: true },
  //   { name: 'mit', isActive: false },
  // ];
  changeState(index: number) {
    this.onUserClicked.emit();
    // this.users[index].isActive = !this.users[index].isActive;
  }
}
