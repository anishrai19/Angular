import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {

  constructor(private auth: StorageService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.isAuthorized(route);
  }

  isAuthorized(route: ActivatedRouteSnapshot): boolean {
    // const role = this.auth.role;
    const expectedRole = route.data['role'];
    const role = localStorage.getItem('role');

    if (role === expectedRole) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
