import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// HttpClient is a built-in service class
@Injectable({
  providedIn: 'root',
})
export class AnimalService {
  constructor(private http: HttpClient) {}

  // private details = [
  //   { name: 'lion', info: 'lion info' },
  //   { name: 'elephant', info: 'elephant info' },
  //   { name: 'horse', info: 'horse info' },
  //   { name: 'tiger', info: 'tiger info' },
  //   { name: 'rhino', info: 'rhino info' },
  // ];

  getAnimals() {
    return this.http.get('localhost:5000/display');
  }
}
