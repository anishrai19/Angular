import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AdminDashboardComponent],
  imports: [CommonModule, ReactiveFormsModule],
})
export class AdminModule {}
