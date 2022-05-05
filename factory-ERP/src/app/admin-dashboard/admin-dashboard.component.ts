import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ErpService } from '../erp.service';
import { FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
})
export class AdminDashboardComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    // dataTable!: MatTableDataSource<any>
    this.erpService
      .genericApi('get', this.erpService.url + 'employee/display', '')
      .subscribe((response: any) => {
        this.dataTable = new MatTableDataSource<any>(response.data);

        this.dataTable.paginator = this.paginator;
        console.log(response.data);
      });
  }

  roles: any = [];

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
      .genericApi('get', this.erpService.url + 'employeerole/display', '')
      .subscribe((response: any) => {
        this.roles = response.data;
      });
  }

  searchForm = new FormGroup({
    role: new FormControl('', [Validators.required]),
  });

  displayedColumns: string[] = [
    'Employee-Name',
    'Employee-Role',
    'Employee-Email',
    'Employee-Shift',
  ];
  dataColumns: string[] = ['name', 'role', 'email', 'shift'];

  onSubmit() {
    this.filterData = this.searchForm.value;
    console.log(this.filterData);
    this.erpService
      .tableDataAccount(this.searchForm.value, 'employee/display?')
      .subscribe((tabRes: any) => {
        this.dataTable = new MatTableDataSource<any>(tabRes.data);

        this.dataTable.paginator = this.paginator;
        console.log(this.dataTable.data);
      });
  }

  logout() {
    this.erpService.logout();
  }
}
