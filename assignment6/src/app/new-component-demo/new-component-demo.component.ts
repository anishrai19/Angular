import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-new-component-demo',
  templateUrl: './new-component-demo.component.html',
  styleUrls: ['./new-component-demo.component.scss'],
})
export class NewComponentDemoComponent {
  @Input() value: number = 0;
  @Input() label: string = '';
  @Output() clicked = new EventEmitter();

  onClick(){
    this.clicked.emit();
  }
}
