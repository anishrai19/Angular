import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string = 'project04';
  

  texts=[
    {name:'mango',info:'this is a king of fruits'},
    {name:'orange',info:'this is an orange'},
    {name:'apple',info:'this is an apple'},
    {name:'banana', info:'this is a banana'}
  ];
  info='';
  name='';
}
