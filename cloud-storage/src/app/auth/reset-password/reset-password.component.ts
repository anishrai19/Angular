import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageService } from 'src/app/storage.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit {
  resetToken: string = '';
  constructor(
    private storageService: StorageService,
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
    forgotPasswordToken: new FormControl('', Validators.required),
    newPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });

  ngOnInit(): void {
    // this.form.valueChanges.subscribe((val: any) => {
    //   if (
    //     this.form.value.newPassword === this.form.value.confirmPass &&
    //     this.form.value.newPassword?.length >= 5 &&
    //     this.form.value.confirmPass?.length >= 5
    //   ) {
    //     this.btnDisabled = false;
    //   } else {
    //     this.btnDisabled = true;
    //   }
    // });
  }

  get newPassword() {
    return this.form.get('newPassword');
  }
  get forgotPasswordToken() {
    return this.form.get('forgotPasswordToken');
  }
  

  onSubmit() {
    console.log(this.form.value);
    this.storageService.resetPassword(this.form.value).subscribe(
      (result: any) => {
        console.log(result.error);
        localStorage.setItem('token', this.token || '');
        alert('Password Reset Successfully');
      },
      (error: any) => {
        this.errors = error.error.error;
        alert(this.errors);
        //  window.location.reload();
        console.log(this.errors);
      }
    );
    this.form.reset();
  }

  logout() {
    this.storageService.logout();
  }
}
