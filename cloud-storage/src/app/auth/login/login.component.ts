import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/storage.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private storageService: StorageService, private router: Router) {}
  ngOnInit(): void {}
  token: string = '';
  profile = '';
  errors='';
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });

  get email(){
    return this.form.get('email');
  }
  get password(){
    return this.form.get('password');
  }
  onSubmit() {
    console.log(this.form.value);
    this.storageService.userLogin(this.form.value).subscribe(
      (result: any) => {
        console.log(result);
        this.token = result.data?.token;
        if (this.token) {
          this.profile = result.data.role;
          localStorage.setItem('token', this.token || '');
          // localStorage.setItem('role',this.profile || '');
          switch (this.profile) {
            case '624d5658556832b92eeb5ee4':
              // this.storageService.getRole('User');
              localStorage.setItem('role','User'||'');
              this.router.navigate(['storage']);
              break;
            case '624d5647556832b92eeb5ee3':
            //  this.storageService.getRole('Admin');
              localStorage.setItem('role', 'Admin' || '');
              this.router.navigate(['admin-dashboard']);
              break;
            default:
          }
        } 
      },
      (error:any) => {
        this.errors = error.error.error;
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
    this.router.navigate(['forgetPassword']);
  }
}
