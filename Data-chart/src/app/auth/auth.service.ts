import { Injectable } from '@angular/core';
import { MasterService } from '../master.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private masterService: MasterService) {}

  login(data:any) {
    return this.masterService.genericApi('post', 'user/sign-up', data);
  }
}
