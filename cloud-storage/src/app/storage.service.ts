import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor(private http: HttpClient, private router: Router) {}

  url = 'http://87f7-103-121-153-12.ngrok.io/';

  genericApi(method: any, url: any, data: any) {
    return this.http.request(method, url, {
      headers: {
        Authorization: localStorage.getItem('token') || '',
      },
      body: data,
    });
  }

  // AuthModel
  userLogin(data: any) {
    return this.genericApi('post', this.url + 'user/login', data);
  }
  userRegister(data: any) {
    return this.genericApi('post', this.url + 'user/register', data);
  }
  resetPassword(data: any) {
    return this.genericApi('post', this.url + 'user/reset-password', data);
  }
  changePasswordRequest(data: any) {
    return this.genericApi('post', this.url + 'user/change-password', data);
  }

  //UserModel
  onFolderSubmit = (data: any) =>
    this.genericApi('post', this.url + 'user/create-folder', data);

  FileSubmit = (data: any) =>
    this.genericApi('post', this.url + 'user/add-file', data);

  getFolderName() {
    return this.genericApi('get', this.url + 'user/show-folders', '');
  }
  getAllFileInFolder(data: any) {
    return this.genericApi(
      'get',
      this.url + `user/show-files?folderName=${data}`,
      ''
    );
  }

  configFormSubmit(data: any) {
    return this.genericApi('post', this.url + 'user/create-request', data);
  }

  onDownload = (fileUrl: any) => {
    return this.http.get(`${this.url}${fileUrl}`, {
      headers: {
        Authorization: localStorage.getItem('token') || '',
      },
      responseType: 'blob',
    });
  };

  onDelete(data: any) {
    return this.genericApi('delete', this.url + 'user/delete-file', data);
  }

  //Admin

  getAdminDashboard() {
    return this.genericApi('get', this.url + 'admin/user-details', '');
  }

  viewPendingRequest() {
    return this.genericApi('get', this.url + 'admin/show-requests', '');
  }

  approoveRequest(userEmail: string, maxSizeOfFile: any, maxNumberOfFile: any) {
    return this.genericApi(
      'put',
      this.url +
        `admin/change-request-status?email=${userEmail}&status=Accepted&requestedMaxSizeOfFiles=${maxSizeOfFile}&requestedMaxNumberOfFiles=${maxNumberOfFile}`,
      ''
    );
  }

  deleteFolder(folder: any) {
    return this.genericApi('delete', this.url + 'user/delete-folder', folder);
  }

  showConfiguration(userEmail: string) {
    return this.genericApi(
      'get',
      this.url + `user/show-details?email=${userEmail}`,
      ''
    );
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  role: string = '';
  getRole(data: string) {
    this.role = data;
    console.log(this.role);
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
