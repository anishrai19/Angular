import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Sallonservice } from '../sallon.service';

// interface services {
//   name: string;
//   _id: string;
// }

interface ratings {
  value: number;
}
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
})
export class FeedbackComponent implements OnInit {
  constructor(private saloneService: Sallonservice) {}

  post = '';
  feedbackPosts: any[] = [];
  services: any = [
    // {name:'Hair cut',_id:'niifuer'},
    // {name:'Shave',_id:'898240984'},
    // {name:'Full Body Massage',_id:'20980498'},
    // {name:'Hair Spa',_id:'2898409849'},
  ];

  serviceby: any = [
    // { name: 'rohan', _id: 'cgchghjg' },
    // { name: 'rahul', _id: '987987' },
    // { name: 'rajesh', _id: '879809809' },
    // { name: 'ramesh', _id: '767988789' },
  ];

  ratings: ratings[] = [
    { value: 1 },
    { value: 2 },
    { value: 3 },
    { value: 4 },
    { value: 5 },
  ];

  feedbackForm = new FormGroup({
    name: new FormControl(''),
    age: new FormControl(''),
    email: new FormControl(''),
    serviceBy: new FormControl(''),
    servicesAvailed: new FormControl(''),
    ambienceRating: new FormControl(''),
    cleanlinessRating: new FormControl(''),
    serviceRating: new FormControl(''),
    comments: new FormControl(''),
    overallRating: new FormControl(''),
  });

  ngOnInit(): void {
    this.saloneService
      .get(this.saloneService.url + 'user/display')
      .subscribe((response: any) => {
        this.serviceby = response.data;
      });

    this.saloneService
      .get(this.saloneService.url + 'service/display')
      .subscribe((response: any) => {
        this.services = response.data;
      });
  }

  onSubmitForm() {
    console.log(this.feedbackForm.value);
    this.saloneService
      .saveFeedback(
        this.saloneService.url + 'form/feedback',
        this.feedbackForm.value
      )
      .subscribe((result) => {
        console.log(result);
      });
    if (this.feedbackForm.valid) {
      alert('Thanks for Submiting form!');
      this.feedbackForm.reset();
    }
  }
}
