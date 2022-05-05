import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ErpService } from '../erp.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.scss'],
})
export class DeliveryComponent implements OnInit {
  products: any = [];

  constructor(private erpService: ErpService) {}
  dataTable: any = [];
  poData = [{ purchaseOrderId: '', ProductId: '' }];
  furnaces = [{ name: '', _id: '' }];
  ngOnInit(): void {
    // this.erpService.sendToken('furnace/display').subscribe((response: any) => {
    //   this.furnaces = response.data;
    //   console.log(this.furnaces);
    // });
    this.erpService
      .genericApi('get', this.erpService.url + 'delivery/display', '')
      .subscribe((response: any) => {
        this.poData = response.data;
        console.log(this.poData);
      });
  }

  product: any = [{ _id: '' }];
  furnace: any = [];
  manufacturingStatus = new FormGroup({
    deliveryRemark: new FormControl('', [Validators.required]),
    deliveryStatus: new FormControl('', [Validators.required]),
    purchaseOrderId: new FormControl('', [Validators.required]),
  });

  productStatus: any = [];
  deliveryStatus: any = [{ name: 'Delivered' }, { name: 'Not Delivered' }];

  onSubmit() {
    this.productStatus = this.manufacturingStatus.value;
    console.log(this.productStatus);
    this.erpService
      .genericApi(
        'put',
        this.erpService.url + 'delivery/attempt',
        this.productStatus
      )
      .subscribe((response) => {});
  }
  logout() {
    this.erpService.logout();
  }
}
