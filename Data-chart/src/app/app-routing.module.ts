import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './services/auth.guard';
import { MonthlyViewComponent } from './user/monthly-view/monthly-view.component';
import { ToolbarComponent } from './user/toolbar/toolbar.component';
import { YearlyViewComponent } from './user/yearly-view/yearly-view.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'monthly-view',
    component: MonthlyViewComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'yearly-view',
    component: YearlyViewComponent,
    canActivate: [AuthGuard],
  },
  { path: 'toolbar', component: ToolbarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule {}
