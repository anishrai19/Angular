import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RatingService } from '../rating.service';

@Component({
  selector: 'app-rating-form',
  templateUrl: './rating-form.component.html',
  styleUrls: ['./rating-form.component.scss'],
})
export class RatingFormComponent implements OnInit {
  names: any = [];
  tracks: any[] = [
    /* 'Angular', 'CSS', 'Node', 'React' */
  ];
  trainers: any[] = [
    //  'Teacher', 'Sir', 'Mam', 'Kalam'
  ];
  constructor(private service: RatingService) {}

  form = new FormGroup({
    studentId: new FormControl('', [Validators.required]),
    track: new FormControl('', [Validators.required]),
    trainersAssigned: new FormControl('', [Validators.required]),
    LogicRating: new FormControl('', [
      Validators.required,
      Validators.min(1),
      Validators.max(10),
    ]),
    CommunicationRating: new FormControl('', [
      Validators.required,
      Validators.min(1),
      Validators.max(10),
    ]),
    AssignmentRating: new FormControl('', [
      Validators.required,
      Validators.min(1),
      Validators.max(10),
    ]),
    ProActivenessRating: new FormControl('', [
      Validators.required,
      Validators.min(1),
      Validators.max(10),
    ]),
  });

  ngOnInit(): void {
    this.service.displayStudent()
      .subscribe((result: any) => {
        this.names = result.data;
      });

    this.service.displayTrack()
      // .genericApi('get', this.service.url + 'track/display', '')
      .subscribe((result: any) => {
        this.tracks = result.data;
      });

    this.service.trainerAssigned()
      // .genericApi(
      //   'get',
      //   this.service.url + 'user/display?role=623feb2bb1e0d6a05ef33c9f',
      //   ''
      // )
      .subscribe((result: any) => {
        this.trainers = result.data;
      });
  }

  onSubmit() {
    console.log(this.form.value);

    // console.log(this.form.value.age);
    const formData = {
      studentId: this.form.value.studentId,
      track: this.form.value.track,
      trainersAssigned: this.form.value.trainersAssigned,
      rating: [
        {
          LogicRating: this.form.value.LogicRating,
          CommunicationRating: this.form.value.CommunicationRating,
          AssignmentRating: this.form.value.AssignmentRating,
          ProActivenessRating: this.form.value.ProActivenessRating,
        },
      ],
    };

    console.log(formData);
    return this.service.submitRatingForm(formData)
      // .genericApi('post', this.service.url + 'form/create', formData)
      .subscribe((resForm) => {
        // console.log(resForm);
        console.log(formData);
        if (this.form.valid) {
          alert('Evaluation Form Submitted');
          this.form.reset();
        }
        this.form.reset();
      });
  }
  logout() {
    this.service.logout();
  }
}
