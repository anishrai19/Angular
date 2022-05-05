import { Component, OnInit } from '@angular/core';
import { ErpService } from '../erp.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-create-po',
  templateUrl: './create-po.component.html',
  styleUrls: ['./create-po.component.scss'],
})
export class CreatePoComponent implements OnInit {
  createPOForm: any;
  filterData: any;
  customers_id: any = [];
  response: any;
  constructor(private erpService: ErpService, private fb: FormBuilder) {
    this.createPOForm = fb.group({
      customer_id: new FormControl('', [Validators.required]),
      address: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      product: fb.array([this.addProd()]),
    });
  }
  ngOnInit(): void {
    this.erpService
      .genericApi('get', this.erpService.url + 'customer/display', '')
      .subscribe((response: any) => {
        this.customers_id = response.data;
      });
  }

  get productsControls(): any {
    return (this.createPOForm.get('product') as FormArray)['controls'];
  }
  public createOrder!: FormGroup;
  public product!: FormArray;

  addProd(): FormGroup {
    return this.fb.group({
      productName: new FormControl('', [Validators.required]),
      quantity: new FormControl('', [Validators.required, Validators.min(1)]),
      dimensions: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required, Validators.min(1)]),
      material: new FormControl('', [Validators.required]),
    });
  }
  poDetails = [];
  addProduct() {
    this.product = this.createPOForm.get('product') as FormArray;
    this.product.push(this.addProd());
  }
  onSubmitForm() {
    this.poDetails = this.createPOForm.value;

    console.log(this.poDetails);
    this.erpService
      .genericApi(
        'post',
        this.erpService.url + 'purchaseorder/create',
        this.poDetails
      )
      .subscribe((response: any) => {
        // this.dataTable = response.data;
        console.log(response.data);
      });
    if (this.createPOForm.valid) {
      alert('New Purchase Order Created');
      this.createPOForm.reset();
    }
  }
  removeProduct(i: number) {
    console.log(i);
    this.product.removeAt(i);
  }

  logout() {
    this.erpService.logout();
  }
}
