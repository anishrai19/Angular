import { HttpInterceptor } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { MasterService } from './master.service';

@Injectable({
  providedIn: 'root',
})
export class TokenInterceptorService implements HttpInterceptor {
  constructor(private injector: Injector) {}
  intercept(req: any, next: any) {
    let masterService = this.injector.get(MasterService);
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `${masterService.getToken()}`,
      },
    });
    return next.handle(tokenizedReq);
  }
}
