import { Component, OnInit } from '@angular/core';
import { RatingService } from '../rating.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private service: RatingService, private router: Router) {}

  token: string = '';
  profile = '';
  form = new FormGroup({
    employeeId: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
  });

  ngOnInit(): void {}

  onLogin() {
    console.log(this.form.value);
    this.service.userLogin(this.form.value)
      // .genericApi('post', this.service.url + 'user/login', this.form.value)
      .subscribe((result: any) => {
        this.token = result.data.token;
        this.profile = result.data.role;
        localStorage.setItem('token', this.token || '');

        if (this.token) {
          //  this.router.navigate(['/admin-dashboard']);
          switch (this.profile) {
            case '623feb17b1e0d6a05ef33c9e':
              this.router.navigate(['/registration']);
              break;

            case '623feb2bb1e0d6a05ef33c9f':
              this.router.navigate(['/rating-form']);
              break;

            case '623febcbb1e0d6a05ef33caa':
              this.router.navigate(['/details']);
              break;
          }
        }
      });
    this.form.reset();
  }
}
