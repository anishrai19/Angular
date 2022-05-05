import { Component, Input} from '@angular/core';
interface Idetails {
  name: string;
  info: string;
}

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent {
  @Input() detailsOfText = '';
}
