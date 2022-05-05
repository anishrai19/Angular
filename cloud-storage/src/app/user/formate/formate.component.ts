import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formate',
  templateUrl: './formate.component.html',
  styleUrls: ['./formate.component.scss'],
})
export class FormateComponent implements OnInit {
  constructor() {}

  @Input() formateHeader: string = '';
  @Input() open: boolean = false;
  @Output() modalClose = new EventEmitter();

  ngOnInit(): void {}
  form = new FormGroup({ name: new FormControl('') });

  onFormateClose() {
    this.modalClose.emit();
  }
}
