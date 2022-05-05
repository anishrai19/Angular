import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { MasterService } from '../master.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private injector: Injector) {}

  intercept(req: any, next: any) {
    let masterService = this.injector.get(MasterService);
    let tokenReq = req.clone({
      setHeaders: {
        Authorization: `${masterService.getToken()}`,
      },
    });
    return next.handle(tokenReq);
  }
}
