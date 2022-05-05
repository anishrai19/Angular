import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MasterService } from 'src/app/master.service';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
})
export class AdminDashboardComponent implements OnInit {
  users: any[] = [];
  errors: string = '';
  constructor(
    private adminService: AdminService,
    private router: Router,
    private service: MasterService
  ) {}

  get year() {
    return this.filterForm.get('year');
  }
  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.adminService.adminGetUser().subscribe((response: any) => {
      console.warn(response);
      this.users = response.data;
      console.log(this.users);
    });
  }

  filterForm = new FormGroup({
    year: new FormControl(''),
  });

  // year = this.filterForm.value.year;

  onClick() {
    this.adminService.getFilteredData(this.filterForm.value.year).subscribe(
      (response: any) => {
        console.log(response.data);
        this.users = response.data;
      },
      (error) => {
        this.errors = error.error.error.e.message;
        console.log(this.errors);
        alert(this.errors);
      }
    );
    console.log(this.filterForm.value);
  }

  onBlockUnblock(userid: string) {
    console.log(userid);
    const obj = {
      id: userid,
    };
    this.adminService.blockUnblockSection(obj).subscribe((response: any) => {
      console.log(response);
      alert(response.data);
      this.getUsers();
    });
  }

  logout() {
    this.service.logout();
  }
}
