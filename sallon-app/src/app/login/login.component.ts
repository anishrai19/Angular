import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Sallonservice } from '../sallon.service';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {}
  loginPosts: any[] = [];
  token = '';
  data = '';

 
  constructor(private saloneService: Sallonservice, private router :Router) {}

  profileForm = new FormGroup({
    employeeId: new FormControl(''),
    password: new FormControl(''),
  });

 

  onSubmit() {
    console.log(this.profileForm.value);
    this.saloneService
      .saveLogin(this.saloneService.url + 'user/login', this.profileForm.value)
      .subscribe((result: any) => {
        console.log(result);
        this.token = result.data.token;
        localStorage.setItem('token',this.token ||'');
        this.router.navigate(['search']);

        
      });
  }
}
