import { Component, OnInit, ViewChild } from '@angular/core';
import { ErpService } from '../erp.service';
import { FormGroup, FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  tableData!: MatTableDataSource<any>;

  status: any = [{ name: 'PaymentPending' }, { name: 'OrderCompleted' }];
  constructor(private erpService: ErpService) {}
  // services: any = [];
  serviceby: any = [];
  filterData = [];
  selectedValue: string = '';
  person = [];
  service = [];
  dataTable: any = [];

  ngOnInit(): void {
    this.erpService
      .genericApi('get', this.erpService.url + '/user/display/roles', '')
      .subscribe((response: any) => {
        this.status = response.data;
      });

    // this.erpService
    //   .sendToken('accounts/display')
    //   .subscribe((response: any) => {
    //     this.dataTable = new MatTableDataSource(response.data);
    //     console.log(response.data);
    //   });
  }

  searchForm = new FormGroup({
    status: new FormControl('', [Validators.required]),
  });

  displayedColumns: string[] = ['PO-Id', 'Total-Amount', 'paymentStatus'];

  onSubmit() {
    this.filterData = this.searchForm.value;
    console.log(this.filterData);
    this.erpService
      .tableDataAccount(this.searchForm.value, 'accounts/display?')
      .subscribe((tabRes: any) => {
        this.dataTable = tabRes.data;
        console.log(this.dataTable);
      });

    this.searchForm.reset();
  }

  logout() {
    this.erpService.logout();
  }
}
