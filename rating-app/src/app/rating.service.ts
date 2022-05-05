import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RatingService {
  constructor(private http: HttpClient, private router: Router) {}

  url = 'https://evaluation123.herokuapp.com/';

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
          query += `${key}=${data[key]}&`;
        }
      }
      console.log(query);
    });
    const url = `${this.url}${endPointUrl}${query}page=2&itemsPerPage`;
    console.log(url);
    return this.http.get(url, {
      headers: {
        Authorization: localStorage.getItem('token') || '',
      },
    });
  }

  getHistory(id: string) {
    return this.http.get(
      'https://evaluation123.herokuapp.com/form/history?studentId=' + id,
      {
        headers: {
          Authorization: localStorage.getItem('token') || '',
        },
      }
    );
  }

  userLogin(data: any) {
    return this.genericApi(
      'post',
      'https://evaluation123.herokuapp.com/user/login',
      data
    );
  }

  displayStudent() {
    return this.genericApi(
      'get',
      this.url + 'user/display?role=623febcbb1e0d6a05ef33caa',
      ''
    );
  }

  displayTrack() {
    return this.genericApi('get', this.url + 'track/display', '');
  }

  trainerAssigned() {
    return this.genericApi(
      'get',
      this.url + 'user/display?role=623feb2bb1e0d6a05ef33c9f',
      ''
    );
  }

  submitRatingForm(data: any) {
    return this.genericApi('post', this.url + 'form/create', data);
  }

  displayRecord() {
    return this.genericApi('get', this.url + 'form/average', '');
  }

  roleDisplay() {
    return this.genericApi('get', this.url + 'role/display', '');
  }

  submitRegistrationForm(data: any) {
    return this.genericApi('post', this.url + 'user/register', data);
  }

  updateRating(data: any) {
    return this.genericApi('put', this.url + 'form/add-rating', data);
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
