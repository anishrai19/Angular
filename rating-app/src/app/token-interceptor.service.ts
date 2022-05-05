import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { RatingService } from './rating.service';

@Injectable({
  providedIn: 'root',
})
export class TokenInterceptorService implements HttpInterceptor {
  constructor(private injector: Injector) {}
  intercept(req: any, next: any) {
    let ratingService = this.injector.get(RatingService);
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `${ratingService.getToken()}`,
      },
    });
    return next.handle(tokenizedReq);
  }
}
