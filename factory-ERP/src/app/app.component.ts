import { Component } from '@angular/core';
import { ErpService } from './erp.service';
import { FormGroup,FormControl,Validator } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'factory-ERP';

  constructor(private erpService:ErpService){}
}
