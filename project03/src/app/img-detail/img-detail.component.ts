import { Component, Input } from '@angular/core';


interface Iimages {
  img: string;
  src: string;
  alt: string;
}
@Component({
  selector: 'app-img-detail',
  templateUrl: './img-detail.component.html',
  styleUrls: ['./img-detail.component.scss'],
})
export class ImgDetailComponent {
  @Input() images: Iimages[] = [];
  @Input() description = '';

  showInfo(index: number) {
    this.description = this.images[index].img;
  }
}
