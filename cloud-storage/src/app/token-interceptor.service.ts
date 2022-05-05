import { Injectable, Injector } from '@angular/core';
import { StorageService } from './storage.service';
import { HttpInterceptor } from '@angular/common/http';
@Injectable(
//   {
//   providedIn: 'root',
// }
)
export class TokenInterceptorService implements HttpInterceptor{
  
  constructor(private injector: Injector) {}
  intercept(req: any, next: any) {
    let storageService = this.injector.get(StorageService);
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `${storageService.getToken()}`,
      },
    });
    return next.handle(tokenizedReq);
  }
}
