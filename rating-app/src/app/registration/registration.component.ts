import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RatingService } from '../rating.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  roles: any = [];
  token: string = '';
  constructor(private service: RatingService) {}

  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    // age: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    role: new FormControl('', [Validators.required]),
  });
  ngOnInit(): void {
    this.service.roleDisplay()
      // .genericApi('get', this.service.url + 'role/display', '')
      .subscribe((result: any) => {
        this.roles = result.data;
      });
  }

  onSubmit() {
    console.log(this.form.value);
    this.service.submitRegistrationForm(this.form.value)
      // .genericApi('post', this.service.url + 'user/register', this.form.value)
      .subscribe((result: any) => {
        console.log(result);
        localStorage.setItem('token', this.token || '');
      });

    if (this.form.valid) {
      alert('New Role Created');
      this.form.reset();
    }
    this.form.reset();
  }

  logout() {
    this.service.logout();
  }
}
