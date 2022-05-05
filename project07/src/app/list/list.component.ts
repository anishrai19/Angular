import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Idetails } from '../app.component';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  @Input() details: Idetails[] = [];
  @Output() onItemClicked = new EventEmitter();

  itemClick(index: number) {
    this.onItemClicked.emit(index);
  }
}
