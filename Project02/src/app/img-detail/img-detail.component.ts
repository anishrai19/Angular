import { Component, Input, } from '@angular/core';

interface Idetails{
  img:string,
  src:string,
  alt:string,
}

@Component({
  selector: 'app-img-detail',
  templateUrl: './img-detail.component.html',
  styleUrls: ['./img-detail.component.scss'],
})
export class ImgDetailComponent {
  @Input() details: Idetails[] = [];
  detailsOfImage="";


  onPress(index: number) {
    this.detailsOfImage= this.details[index].img;
  }
}
