import { Component, OnInit } from '@angular/core';
import { AnimalService } from './animal.service';
export interface Idetails {
  name: string;
  info: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  
  details: any = [{name:'lion',info:'this is lion'}];

  constructor(private animalService: AnimalService) {}
  title = 'project08';
  info = '';

  ngOnInit(): void {
    this.animalService.getAnimals().subscribe((response) => {
      this.details = response;
    });
  }
  

  onClick(index: number) {
    this.info = this.details[index].info;
  }
}
