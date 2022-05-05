import { Component, OnInit, ViewChild } from '@angular/core';
import { ErpService } from '../erp.service';
import { FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-payment-status',
  templateUrl: './payment-status.component.html',
  styleUrls: ['./payment-status.component.scss'],
})
export class PaymentStatusComponent implements OnInit {
  // @ViewChild(MatPaginator) paginator!: MatPaginator;
  // dataTable!: MatTableDataSource<any>;
  constructor(private erpService: ErpService) {}

  // displayedColumns: string[] = ['PO-Id', 'Racks No.', 'Edit', 'Delete'];
  products: any = [];

  // ngOnInit(): void {
  //   this.erpService
  //     .sendToken('manufacturing/display')
  //     .subscribe((response: any) => {
  //       this.products = response.data;
  //       console.log(response.data);
  //     });
  // }

  poData = [{ PurchaseOrderId: '', _id: '' }];
  // furnaces = [{ rackNumber: '', _id: '' }];
  ngOnInit(): void {
    // this.erpService.sendToken('accounts/display').subscribe((response: any) => {
    //   this.status = response.data;
    //   console.log(this.status);
    // });
    this.erpService
      .genericApi(
        'get',
        this.erpService.url + 'accounts/display?status=PaymentPending',
        ''
      )
      .subscribe((response: any) => {
        this.poData = response.data;
        console.log(this.poData);
      });
  }

  product: any = [{ _id: '' }];
  status: any = [{ name: 'OrderCompleted' }];
  paymentStatus = new FormGroup({
    status: new FormControl(''),
    purchaseOrderId: new FormControl(''),
  });

  sendPaymentData: any = [];
  productStatus: any = [];

  onSubmit() {
    this.sendPaymentData = this.paymentStatus.value;
    console.log(this.sendPaymentData);
    this.erpService
      .genericApi(
        'put',
        this.erpService.url + 'accounts/edit',
        this.sendPaymentData
      )
      .subscribe((response) => {});
  }
  logout() {
    this.erpService.logout();
  }
}
