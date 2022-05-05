import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
})
export class DemoComponent implements OnInit {
  @Input('header1')
  header1: String = '';
  @Input('header')
  header: String = '';

  footer = new Date().toDateString();
  constructor() {}

  ngOnInit(): void {}
}
