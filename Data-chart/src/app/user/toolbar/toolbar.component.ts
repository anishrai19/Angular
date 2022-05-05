import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService, SocialUser } from 'angularx-social-login';
import { UserService } from '../user.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  socialUser!: SocialUser;
  username = localStorage.getItem('username');
  constructor(
    private socialAuthService: SocialAuthService,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    // this.socialAuthService.authState.subscribe((user) => {
    //   this.socialUser = user;
    // });
  }

  logOut() {
    this.userService.logout();
    this.router.navigate(['login']);
  }

  yearlyView() {
    this.router.navigate(['yearly-view']);
  }

  monthlyView() {
    this.router.navigate(['monthly-view']);
  }
}
