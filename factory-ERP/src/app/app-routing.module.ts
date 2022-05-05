import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { StorageComponent } from './storage/storage.component';
import { AccountComponent } from './account/account.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CreateEmpComponent } from './create-emp/create-emp.component';
import { CreatePoComponent } from './create-po/create-po.component';
import { FurnaceOperatorComponent } from './furnace-operator/furnace-operator.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { PaymentStatusComponent } from './payment-status/payment-status.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'account', component: AccountComponent, canActivate: [AuthGuard] },
  {
    path: 'add-customer',
    component: AddCustomerComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'admin-dashboard',
    component: AdminDashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'create-emp',
    component: CreateEmpComponent,
    canActivate: [AuthGuard],
  },
  { path: 'create-po', component: CreatePoComponent, canActivate: [AuthGuard] },
  {
    path: 'furnace-operator',
    component: FurnaceOperatorComponent,
    canActivate: [AuthGuard],
  },
  { path: 'storage', component: StorageComponent, canActivate: [AuthGuard] },
  { path: 'delivery', component: DeliveryComponent, canActivate: [AuthGuard] },
  {
    path: 'payment-status',
    component: PaymentStatusComponent,
    canActivate: [AuthGuard],
  },
];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const routingComponents = [
  LoginComponent,
  AccountComponent,
  AddCustomerComponent,
  AdminDashboardComponent,
  CreateEmpComponent,
  CreatePoComponent,
  FurnaceOperatorComponent,
  StorageComponent,
  DeliveryComponent,
  PaymentStatusComponent,
];
