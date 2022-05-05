import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  public buttonText = '';
  @Input() color: string = '0068B4';
  @Input() type: string = 'button';
  @Output() btnClick = new EventEmitter();
  @Input() isDisabled = false;

  onClick() {
    this.btnClick.emit();
  }
}
