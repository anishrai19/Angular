import { Component, Input } from '@angular/core';
import { Idetails } from '../app.component';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent {
  @Input() data: Idetails | undefined = undefined;
}
