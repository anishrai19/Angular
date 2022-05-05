import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class MasterService {
  baseUrl = 'https://fa0c-1-22-124-182.ngrok.io/';

  constructor(private http: HttpClient, private router: Router) {}
  token = localStorage.getItem('token');

  getToken() {
    return localStorage.getItem('token');
  }

  genericApi(method: string, url: string, data: any) {
    return this.http.request(method, this.baseUrl + url, {
      body: data,
    });
  }
}
