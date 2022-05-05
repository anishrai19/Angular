import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AuthGuard } from './auth.guard';
import { RoleGuard } from './role.guard';
import { ForgetPasswordComponent } from './auth/forget-password/forget-password.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
// import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { TaskContainerComponent } from './user/task-container/task-container.component';
import { SingleTaskComponent } from './user/single-task/single-task.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'forget-password', component: ForgetPasswordComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  // {
  //   path: 'user-dashboard',
  //   component: UserDashboardComponent,
  //   // canActivate: [AuthGuard, RoleGuard],
  //   // data: { role: 'User' },
  // },
  {
    path: 'admin-dashboard',
    component: AdminDashboardComponent,
    // canActivate: [AuthGuard, RoleGuard],
    // data: { role: 'Admin' },
  },

  {
    path: 'task-container',
    component: SingleTaskComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule {}
