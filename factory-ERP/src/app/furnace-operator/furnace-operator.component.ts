import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ErpService } from '../erp.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-furnace-operator',
  templateUrl: './furnace-operator.component.html',
  styleUrls: ['./furnace-operator.component.scss'],
})
export class FurnaceOperatorComponent implements OnInit {
  products: any = [];

  constructor(private erpService: ErpService) {}

  // ngOnInit(): void {
  //   this.erpService
  //     .sendToken('manufacturing/display')
  //     .subscribe((response: any) => {
  //       this.products = response.data;
  //       console.log(response.data);
  //     });
  // }

  dataTable: any = [];
  poData = [{ PurchaseOrderId: '', ProductId: '' }];
  furnaces = [{ name: '', _id: '' }];
  ngOnInit(): void {
    this.erpService
      .genericApi('get', this.erpService.url + 'furnace/display', '')
      .subscribe((response: any) => {
        this.furnaces = response.data;
        console.log(this.furnaces);
      });
    this.erpService
      .genericApi('get', this.erpService.url + 'manufacturing/display', '')
      .subscribe((response: any) => {
        this.poData = response.data;
        console.log(this.poData);
      });
  }

  product: any = [{ _id: '' }];
  furnace: any = [];
  manufacturingStatus = new FormGroup({
    productId: new FormControl('', [Validators.required]),
    furnaceId: new FormControl('', [Validators.required]),
    postMachiningWeight: new FormControl('', [Validators.required]),
    purchaseOrderId: new FormControl('', [Validators.required]),
  });
  manufacturing = [
    { status: 'Manufactured', _id: 'dhdh' },
    { status: 'Pending', _id: 'dhhdhd' },
  ];
  productStatus: any = [];
  // order = [
  //   {_id: : ''},
  // ]
  updateStatus() {
    this.productStatus = this.manufacturingStatus.value;
    console.log(this.productStatus);
    this.erpService
      .genericApi(
        'put',
        this.erpService.url + 'manufacturing/edit-product',
        this.productStatus
      )
      .subscribe((response) => {});
  }
  onSubmit(purchaseOrderId: string) {
    console.log({ purchaseOrderId });
    this.erpService
      .genericApi('put', this.erpService.url + 'manufacturing/update-status', {
        purchaseOrderId,
      })
      .subscribe((response) => {});
  }
  logout() {
    this.erpService.logout();
  }
}
