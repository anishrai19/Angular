import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  constructor() { }
@Input() name='';
@Output() event= new EventEmitter
  ngOnInit(): void {
  }

  onclick(event:any){
    this.event.emit();
  }
}
