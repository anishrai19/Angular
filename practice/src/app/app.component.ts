import { Component } from '@angular/core';
import { PractService } from './pract.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [PractService],
})
export class AppComponent {
  title = 'practice';
  name1: string = 'Anish';
  fullName: string = 'Hello Anish';
  message:string='';
  constructor(private service: PractService) {}

  arr: any[] = [];
  name = this.service.getUserData().name;
  mobileNo = this.service.getUserData().mobileNo;

  messageMobileNo(){
    this.message="This is Anish mobile Number";
  }

  onclick(event:any) {
    console.log(event.FirstComponent.name);
    this.title = 'eventListener title';
  }
}
