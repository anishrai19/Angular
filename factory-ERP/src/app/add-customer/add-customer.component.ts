import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ErpService } from '../erp.service';
import { FormGroup, FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss'],
})
export class AddCustomerComponent implements OnInit, AfterViewInit {
  constructor(private erpService: ErpService) {}

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngAfterViewInit(): void {
     this.erpService
       .genericApi('get', this.erpService.url + 'customer/display', '')
       .subscribe((response: any) => {
         this.dataTable = new MatTableDataSource<any>(response.data);
         this.dataTable.paginator=this.paginator;
         console.log(response.data);
       });
  }
  // tableData!: MatTableDataSource<any>;

  createCustomerForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    contact: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(12),
    ]),
    address: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });
  // services: any = [];
  serviceby: any = [];
  filterData = [];
  selectedValue: string = '';
  person = [];
  service = [];
  dataTable: any = [];

  ngOnInit(): void {
    this.erpService
      .genericApi('get', this.erpService.url + 'customer/display', '')
      .subscribe((response: any) => {
        this.dataTable = new MatTableDataSource(response.data);
        console.log(response.data);
      });
  }

  // searchForm = new FormGroup({
  //   Roles: new FormControl(''),
  // });

  displayedColumns: string[] = [
    'Customer-Name',
    'Contact',
    'Customer-Email',
    'Customer-Address',
  ];

  onSubmitForm() {
    this.filterData = this.createCustomerForm.value;
    console.log(this.filterData);
    this.erpService
      .genericApi(
        'post',
        this.erpService.url + 'customer/create',
        this.filterData
      )
      .subscribe((response: any) => {
        // this.dataTable = response.data;
        console.log(response);
      });
    if (this.createCustomerForm.valid) {
      alert('New Customer Created');
      this.createCustomerForm.reset();
    }
  }

  logout() {
    this.erpService.logout();
  }
}
