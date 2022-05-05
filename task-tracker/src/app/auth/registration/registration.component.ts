import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  constructor(private Service: AuthService, private router: Router) {}
  errors: string = '';

  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });
  ngOnInit(): void {}

  get name() {
    return this.form.get('name');
  }

  get email() {
    return this.form.get('email');
  }
  get password() {
    return this.form.get('password');
  }

  onSubmit() {
    console.log(this.form.value);
    this.Service.userRegister(this.form.value).subscribe(
      (result: any) => {
        console.log(result);
        // localStorage.setItem('token', this.token || '');
        alert('Registration Successful');

      },
      (error: HttpErrorResponse) => {
        this.errors = error.error.error.message;
        console.log(this.errors);
        alert(this.errors);
        //  window.location.reload();
        //  console.log(this.errors);
      }
    );
    this.form.reset();
    this.router.navigate(['login']);
  }

  logout() {
    this.Service.logout();
  }
}
