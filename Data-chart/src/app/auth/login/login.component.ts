import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import {
  GoogleLoginProvider,
  SocialAuthService,
  SocialUser,
} from 'angularx-social-login';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  id: string = '';
  name: string = '';
  email: string = '';
  username:string='';
  socialUser!: SocialUser;
  isLoggedin?: boolean;
  token: string = '';
  obj: any;
  constructor(
    private authService: AuthService,
    private route: Router,
    private socialAuthService: SocialAuthService,
    private formBuilder: FormBuilder
  ) {}

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
  });

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.socialAuthService.authState.subscribe((user) => {
      this.socialUser = user;
      this.isLoggedin = user != null;
      console.log(this.socialUser);
      this.obj = {
        id: this.socialUser.id,
        name: this.socialUser.name,
        email: this.socialUser.email,
      };
    });
  }

  signIn() {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then(() => {
      this.route.navigate(['/monthly-view']);
      console.log(this.obj);
      this.authService.login(this.obj).subscribe((response: any) => {
        console.log(response);
        this.token = response.data;
        localStorage.setItem('token', this.token);
      });
      // this.route.navigate(['monthly-view']);
    });
  }
}
