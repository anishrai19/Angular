import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { MasterService } from '../master.service';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  constructor(private masterService: MasterService, private router: Router) {}
  role: string = '';

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
    const role = localStorage.getItem('role');
    const expectedRole = route.data['role'];
    if (role === expectedRole) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
