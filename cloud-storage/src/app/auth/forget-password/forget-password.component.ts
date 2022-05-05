import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/storage.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss'],
})
export class ForgetPasswordComponent implements OnInit {
  constructor(private storageService: StorageService, private router: Router) {}
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
    this.storageService.changePasswordRequest(this.form.value).subscribe(
      (result: any) => {
        alert('Reset Password link sent Successful');
      },
      (error: any) => {
        this.errors = error.error.error;
        alert(this.errors);
        //  window.location.reload();
        //  console.log(this.errors);
      }
    );
    this.form.reset();
    this.router.navigate(['login']);
  }

  logout() {
    this.storageService.logout();
  }
}
