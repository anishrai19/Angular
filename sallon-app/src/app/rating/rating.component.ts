import { Component, OnInit } from '@angular/core';
import { Sallonservice } from '../sallon.service';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
})
export class RatingComponent implements OnInit {
  constructor( private salonServices: Sallonservice) {}
  rating: any = [];
  ngOnInit(): void {
    this.salonServices
  .getToken('form/average')
      .subscribe((response: any) => {
        this.rating = response.data;
        console.log(response.data);
      });
  }
}
