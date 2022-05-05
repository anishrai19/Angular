import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit {
  Token: string = '';
  constructor(
    private Service: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  firstPassword: any = '';
  secondPassword: any = '';
  token: string = '';
  errors: any = '';
  profile = '';
  btnDisabled = true;

  form = new FormGroup({
    resetToken: new FormControl('', Validators.required),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });

  ngOnInit(): void {}

  get password() {
    return this.form.get('password');
  }
  get resetToken() {
    return this.form.get('resetToken');
  }

  onSubmit() {
    console.log(this.form.value);
    this.Service.resetPassword(this.form.value).subscribe(
      (result: any) => {
        console.log(result);
        console.log(result.error);
        localStorage.setItem('token', this.token || '');
        alert('Password Reset Successfully');
      },
      (error: HttpErrorResponse) => {
        this.errors = error.error.error;
        alert(this.errors);
        //  window.location.reload();
        console.log(this.errors);
      }
    );
    this.form.reset();
    this.router.navigate(['login']);
  }

  logout() {
    this.Service.logout();
  }
}
