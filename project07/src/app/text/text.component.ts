import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Idetails } from '../app.component';
@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss'],
})
export class TextComponent {
  @Input() details: Idetails[] = [];
  @Output() onItemClicked = new EventEmitter();

  itemClick(index: number) {
    this.onItemClicked.emit(index);
  }
}
