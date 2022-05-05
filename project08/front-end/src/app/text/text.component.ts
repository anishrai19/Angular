import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Idetails } from '../app.component';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent {
  @Input() details:Idetails[]=[];
  @Output() onClickEvent=new EventEmitter();
  onClick(index:number){
     this.onClickEvent.emit(index);
  }
}
