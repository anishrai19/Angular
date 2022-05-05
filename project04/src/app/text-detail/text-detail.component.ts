import { Component, Input } from '@angular/core';
interface Itexts{
name:string;
info:string;
}

@Component({
  selector: 'app-text-detail',
  templateUrl: './text-detail.component.html',
  styleUrls: ['./text-detail.component.scss'],
})
export class TextDetailComponent {
  @Input() texts: Itexts[] = [];
  @Input() detailsOfText = '';

  showDetails(index:number){

    this.detailsOfText=this.texts[index].info;
  }
}
