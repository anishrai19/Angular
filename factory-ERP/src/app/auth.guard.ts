import { Injectable } from '@angular/core';
import {  ActivatedRouteSnapshot, CanActivate,Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ErpService } from './erp.service';

@Injectable(
//   {
//   providedIn: 'root'
// }
)
export class AuthGuard implements CanActivate {
 
  constructor (private erpService:ErpService, private router:Router)
  {}
  
  canActivate():boolean {

    if(this.erpService.loggedIn()){
      return true;
    }else {
       this.router.navigate(['/login'])
       return false;
    }
  }
}
