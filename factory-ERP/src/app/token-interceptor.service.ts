import { Injectable, Injector } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ErpService } from './erp.service';

@Injectable()
//   {
//   providedIn: 'root'
// }
export class TokenInterceptorService implements HttpInterceptor {
  constructor(private injector: Injector) {}
  intercept(req: any, next: any) {
    let erpService = this.injector.get(ErpService);
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `${erpService.getToken()}`,
      },
    });
    return next.handle(tokenizedReq);
  }
}
