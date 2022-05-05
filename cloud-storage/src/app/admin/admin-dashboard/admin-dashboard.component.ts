import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/storage.service';
import { FormControl,FormGroup } from '@angular/forms';


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
})
export class AdminDashboardComponent implements OnInit {
  users: any[] = [];
  totalFiles = 0;
  pendingRequestModal: any;
  pendingRequest: any;
  configuration: any;
  allStatus: [] = [];
  userDetails:any;
  constructor(private service: StorageService, private router: Router) {}

  ngOnInit(): void {
    this.service.getAdminDashboard().subscribe((res: any) => {
      this.users = res.data;
      console.log('admin dashboard  display user');
      console.log(this.users);

      for (let i = 0; i < this.users.length; i++) {
        console.log(this.users[i]);
        this.totalFiles = this.totalFiles + this.users[i].totalFiles;
      }
      console.log(this.totalFiles);
    });
  }

  viewPendingRequest() {
    this.service.viewPendingRequest().subscribe((res: any) => {
      this.pendingRequest = res.data;
      console.log(this.pendingRequest);
      if (res) {
        this.pendingRequestModal = true;
      }
    });
  }

  approoveRequest(userEmail: string,maxSizeOfFile:any,maxNumberOfFile:any) {
    console.log(userEmail, maxSizeOfFile, maxNumberOfFile);
    this.service
      .approoveRequest(userEmail, maxSizeOfFile, maxNumberOfFile)
      .subscribe((res: any) => {
        console.log(res.data);
        alert(res.data);
      });
  }

  showConfiguration(userEmail: string) {
    console.log(userEmail);
    this.configuration = true;
    this.service.showConfiguration(userEmail).subscribe((res: any) => {
      this.userDetails=res.data;
      console.log(this.userDetails);
    });
  }

  closePendingRequestModal() {
    this.pendingRequestModal = false;
  }

  closeConfiguration(){
    this.configuration=false;
  }

  logout() {
    this.service.logout();
  }
}
