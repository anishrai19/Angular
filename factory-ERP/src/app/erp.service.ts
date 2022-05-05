import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ErpService {
  constructor(private http: HttpClient, private router: Router) {}

  url = 'https://manufacturingunit.herokuapp.com/';

  genericApi(method: any, url: any, data: any) {
    return this.http.request(method, url, {
      body: data,
    });
  }

  tableDataAccount(data: any, endPointUrl: any) {
    let query = '';
    console.log(data);

    Object.keys(data).forEach((key: string) => {
      if (data[key]) {
        if (key === 'xyz') {
          data[key].forEach((x: any) => {
            query += `${key}[]=${x}`;
          });
        } else {
          query += `${key}=${data[key]}`;
        }
      }
      console.log(query);
    });
    const url = `${this.url}${endPointUrl}${query}`;

    return this.http.get(url, {
      headers: {
        Authorization: localStorage.getItem('token') || '',
      },
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
}
