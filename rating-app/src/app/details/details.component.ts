import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RatingService } from '../rating.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  id: string = '';
  index: number = 0;
  columns = [
    'LogicRating',
    'CommunicationRating',
    'AssignmentRating',
    'ProActivenessRating',
  ];


  dataSource: any[] = [];

  internDetails: any = {};
  
  averages: any = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: RatingService
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.id = params['_id'];
    });
  }

  ngOnInit(): void {
    this.service.getHistory(this.id).subscribe((res: any) => {
      this.dataSource = res.data;
      
      this.internDetails = res.data;
      console.log(this.dataSource);
    });
  }
  logout() {
    this.service.logout();
  }
}
