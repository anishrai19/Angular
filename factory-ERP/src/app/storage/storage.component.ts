import { Component, OnInit, ViewChild } from '@angular/core';
import { ErpService } from '../erp.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.scss'],
})
export class StorageComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  dataTable!: MatTableDataSource<any>;
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
  furnaces = [{ rackNumber: '', _id: '' }];
  ngOnInit(): void {
    this.erpService
      .genericApi('get', this.erpService.url + 'storagerack/display', '')
      .subscribe((response: any) => {
        this.furnaces = response.data;
        console.log(this.furnaces);
      });
    this.erpService
      .genericApi(
        'get',
        this.erpService.url + 'purchaseorder/display/?status=PostMachiningDone',
        ''
      )
      .subscribe((response: any) => {
        this.poData = response.data;
        console.log(this.poData);
      });
  }

  product: any = [{ _id: '' }];
  furnace: any = [];
  storageStatus = new FormGroup({
    storageRackIds: new FormControl('', [Validators.required]),
    purchaseOrderId: new FormControl('', [Validators.required]),
  });

  sendStorageData: any = [];
  productStatus: any = [];

  onSubmit() {
    this.sendStorageData = this.storageStatus.value;
    console.log(this.sendStorageData);
    this.erpService
      .genericApi(
        'post',
        this.erpService.url + 'storage/create',
        this.sendStorageData
      )
      .subscribe((response) => {
        this.erpService
          .genericApi(
            'get',
            this.erpService.url +
              'purchaseorder/display/?status=PostMachiningDone',
            ''
          )
          .subscribe((response: any) => {
            this.poData = response.data;
            console.log(this.poData);
          });
      });
  }
  logout() {
    this.erpService.logout();
  }
}
