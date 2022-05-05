import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MasterService } from '../master.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private service: MasterService,private router:Router) {}

  userLogin(data: any) {
    return this.service.genericApi('post', 'user/login', data);
  }
  userRegister(data: any) {
    return this.service.genericApi('post', 'user/register', data);
  }
  resetPassword(data: any) {
    return this.service.genericApi('put', 'user/reset-password', data);
  }
  changePasswordRequest(data: any) {
    return this.service.genericApi('post', 'user/forgot-password', data);
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
