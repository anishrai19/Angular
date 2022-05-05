import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AuthGuard } from './auth.guard';
import { ForgetPasswordComponent } from './auth/forget-password/forget-password.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { RoleGuard } from './role.guard';
import { FilesComponent } from './user/storage/files/files.component';
import { StorageComponent } from './user/storage/storage.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'registration',
    component: RegistrationComponent,
  },
  {
    path: 'forgetPassword',
    component: ForgetPasswordComponent,
  },
  {
    path: 'reset-password',
    component: ResetPasswordComponent,
  },

  {
    path: 'admin-dashboard',
    component: AdminDashboardComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { role: 'Admin' },
  },
  {
    path: 'storage',
    component: StorageComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { role: 'User' },
  },
  {
    path: 'files/:data',
    component: FilesComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { role: 'User' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule {}

