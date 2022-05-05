import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { RatingService } from '../rating.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss'],
})
export class UpdateComponent implements OnInit {
  id: string = '';
  error: string = '';

  form = new FormGroup({
    formId: new FormControl('', Validators.required),

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

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: RatingService
  ) {
    this.activatedRoute.params.subscribe((params) => {
      console.log(params['_id']);

      this.id = params['_id'];

      this.form.get('formId')?.setValue(this.id);
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    const formData = {
      formId: this.form.value.formId,
      rating: {
        LogicRating: this.form.value.LogicRating,
        CommunicationRating: this.form.value.CommunicationRating,
        AssignmentRating: this.form.value.AssignmentRating,
        ProActivenessRating: this.form.value.ProActivenessRating,
      },
    };
    console.log(formData);
    this.service
      .updateRating(formData)
      // .genericApi('put', this.service.url + 'form/add-rating', formData)
      .subscribe({
        next: (res: any) => {
          this.form.reset();
        },
        error: (error) => {
          alert(error.error.error);
        },
      });
    if (this.form.valid) {
      alert('Updation Done');
      this.form.reset();
    }
  }
  logout() {
    this.service.logout();
  }
}
