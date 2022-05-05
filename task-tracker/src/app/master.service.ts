import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class MasterService {
  constructor(private http: HttpClient, private router: Router) {}

  baseUrl = 'https://8230-1-22-124-182.in.ngrok.io/';

  genericApi(method: string, url: string, data: any) {
    return this.http.request(method, this.baseUrl + url, {
      headers: {
        Authorization: localStorage.getItem('token') || '',
      },
      body: data,
    });
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
  // role: string = '';
  // getRole(data: string) {
  //   this.role = data;
  //   console.log(this.role);
  // }
}
