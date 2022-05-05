import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss'],
})
export class ForgetPasswordComponent implements OnInit {
  constructor(private Service: AuthService, private router: Router) {}
  errors = '';
  ngOnInit(): void {}

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  get email() {
    return this.form.get('email');
  }
  sendLinkToEmail() {
    console.log(this.form.value);
    this.Service.changePasswordRequest(this.form.value).subscribe(
      (result: any) => {
        console.log(result);
        alert('Reset Password link sent Successful');
      },
      (error: HttpErrorResponse) => {
        this.errors = error.error.error;
        alert(this.errors);
      }
    );
    this.form.reset();
    this.router.navigate(['login']);
  }

  logout() {
    this.Service.logout();
  }
}
