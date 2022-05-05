import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ErpService } from '../erp.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-create-emp',
  templateUrl: './create-emp.component.html',
  styleUrls: ['./create-emp.component.scss'],
})
export class CreateEmpComponent implements OnInit {
  roles: any = [
    // { name: 'Inventory Mang', _id: 'cgchghjg' },
    // { name: 'Labor', _id: '987987' },
    // { name: 'Strorage Mang', _id: '879809809' },
    // { name: 'PO Manager', _id: '767988789' },
  ];

  shift: any = [];
  constructor(private erpService: ErpService) {}

  createEmpForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    role: new FormControl('', [Validators.required]),
    shift: new FormControl('', [Validators.required]),
  });
  ngOnInit(): void {
    this.erpService
      .genericApi('get', this.erpService.url + 'employeerole/display', '')
      .subscribe((response: any) => {
        this.roles = response.data;
      });

    this.erpService
      .genericApi('get', this.erpService.url + 'shift/display', '')
      .subscribe((response: any) => {
        this.shift = response.data;
      });
    // this.erpService
    //   .sendToken('employee/register')
    //   .subscribe((response: any) => {
    //   //  console.log(response.data);
    //   });
  }

  onSubmitForm() {
    console.log(this.createEmpForm.value);

    this.erpService
      .genericApi(
        'post',
        this.erpService.url + 'employee/register',
        this.createEmpForm.value
      )
      .subscribe((result: any) => {
        console.log(result);
        // error: (error) => {
        //   alert(error.error.error);
        // },
      });
    if (this.createEmpForm.valid) {
      alert('New Employee Created');
      this.createEmpForm.reset();
    }
  }
  logout() {
    this.erpService.logout();
  }
}
