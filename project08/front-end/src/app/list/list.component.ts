import { Component, EventEmitter, Input,  Output } from '@angular/core';
import { Idetails } from '../app.component';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Input() details:Idetails[]=[];
  @Output() onClickEvent=new EventEmitter();

  onClick(index:number){
    this.onClickEvent.emit(index);
  }

}
