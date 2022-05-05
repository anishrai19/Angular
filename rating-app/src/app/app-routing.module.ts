import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RatingFormComponent } from './rating-form/rating-form.component';
import { RatingRecordComponent } from './rating-record/rating-record.component';

import { AuthGuard } from './auth.guard';
import { RegistrationComponent } from './registration/registration.component';
import { UpdateComponent } from './update/update.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'rating-form',
    component: RatingFormComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'registration',
    component: RegistrationComponent,
    canActivate: [AuthGuard],
  },

  {
    path: 'rating-record',
    component: RatingRecordComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'update/:_id',
    component: UpdateComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'details/:_id',
    component: DetailsComponent,
    canActivate: [AuthGuard],
  },
  //   { path: 'account', component: AccountComponent, canActivate: [AuthGuard] },
];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const routingComponents = [
  LoginComponent,
  RegistrationComponent,
  RatingFormComponent,
  RatingRecordComponent,
  UpdateComponent,
  DetailsComponent,
];
