import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ILogin } from 'src/app/interface/interface';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private Service: AuthService, private router: Router) {}
  ngOnInit(): void {}
  token: string = '';
  responseData?: ILogin;
  profile = '';
  errors:string = '';
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });

  get email() {
    return this.form.get('email');
  }
  get password() {
    return this.form.get('password');
  }
  onSubmit() {
    console.log(this.form.value);
    this.Service.userLogin(this.form.value).subscribe(
      (result: any) => {
        this.responseData = result.data;
        alert('User Successfully login');
        console.log(result);
        this.token = result.data?.token;
        if (this.token) {
          this.profile = result.data.role._id;
          localStorage.setItem('token', this.token || '');
          // localStorage.setItem('role',this.profile || '');
          switch (this.profile) {
            case '625f9547a6253cfaca2568e7':
              // this.storageService.getRole('User');
              localStorage.setItem('role', 'User' || '');
              this.router.navigate(['task-container']);
              break;
            case '625f9547a6253cfaca2568e3':
              //  this.storageService.getRole('Admin');
              localStorage.setItem('role', 'Admin' || '');
              this.router.navigate(['admin-dashboard']);
              break;
            default:
          }
        }
      },
      (error: HttpErrorResponse) => {
        this.errors = error.error.error.e.message;
        alert(this.errors);
        console.log(this.errors);
      }
    );
    this.form.reset();
  }

  gotoRegistration() {
    this.router.navigate(['registration']);
  }
  gotoForgetPassword() {
    this.router.navigate(['forget-password']);
  }
}
