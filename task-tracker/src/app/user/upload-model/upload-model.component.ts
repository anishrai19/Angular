import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-upload-model',
  templateUrl: './upload-model.component.html',
  styleUrls: ['./upload-model.component.scss'],
})
export class UploadModelComponent implements OnInit {
  @Output() modalClose = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  closeModal() {
    this.modalClose.emit();
  }
}
