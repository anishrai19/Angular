import { Component, OnInit } from '@angular/core';
import { ErpService } from '../erp.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {}
  token = '';
  data = '';
  profile = '';

  constructor(private erpService: ErpService, private router: Router) {}

  profileForm = new FormGroup({
    employeeId: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });

  onSubmit() {
    console.log(this.profileForm.value);

    this.erpService
      .genericApi(
        'post',
        this.erpService.url + 'employee/login',
        this.profileForm.value
      )
      .subscribe((result: any) => {
        this.token = result.data.token;
        this.profile = result.data.role;
        localStorage.setItem('token', this.token || '');
        if (this.token) {
          //  this.router.navigate(['/admin-dashboard']);
          switch (this.profile) {
            case '623945ae147217c8959381bc':
              this.router.navigate(['/admin-dashboard']);
              break;
            case '623945ae147217c8959381c1':
              this.router.navigate(['/account']);
              break;
            case '623945ae147217c8959381c0':
              this.router.navigate(['/delivery']);
              break;
            case '623945ae147217c8959381be':
              this.router.navigate(['/furnace-operator']);
              break;
            case '623945ae147217c8959381bd':
              this.router.navigate(['/create-po']);
              break;
            case '623945ae147217c8959381bf':
              this.router.navigate(['/storage']);
              break;
          }
        }
      });
    this.profileForm.reset();
  }
}
