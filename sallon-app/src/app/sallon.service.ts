import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';

// HttpClient is a built-in service class
@Injectable({
  providedIn: 'root',
})
export class Sallonservice {
 
  constructor(private http: HttpClient) {}

  url = 'https://salon123.herokuapp.com/';

  saveFeedback(url: any, data: any) {
    return this.http.post(url, data);
  }

  get(url: any) {
    return this.http.get(url);
  }
  saveLogin(url: any, data: any) {
    return this.http.post(url, data);
  }

  sendFormData(url: any, data: any) {
    return this.http.post(url, data, {
      headers: {
        Authorization: localStorage.getItem('token') || '',
      },
    });
  }

  sendToken(endpoint: any) {
    return this.http.get(this.url + endpoint, {
      headers: {
        Authorization: localStorage.getItem('token') || '',
      },
    });
  }
  getToken(endpoint: any) {
    return this.http.get(this.url + endpoint, {
      headers: {
        Authorization: localStorage.getItem('token') || '',
      },
    });
  }

  tableData(data: any) {
    let query = '';
    console.log(data);

    Object.keys(data).forEach((key: string) => {
      if (data[key]) {
        if (key === 'servicesAvailed') {
          data[key].forEach((x: any) => {
            query += `${key}[]=${x}&`;
          });
        } else {
          query += `${key}=${data[key]}&`;
        }
      }
      console.log(query);
    });
    const url = `${this.url}form/filteraverage?${query}`;

    return this.http.get(url, {
      headers: {
        Authorization: localStorage.getItem('token') || '',
      },
    });
  }
}

