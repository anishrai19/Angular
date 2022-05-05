import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { MasterService } from '../master.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private masterService: MasterService, private router: Router) {}

  canActivate(): boolean {
    if (this.masterService.token) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
