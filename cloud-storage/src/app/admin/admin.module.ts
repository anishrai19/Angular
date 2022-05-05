import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [AdminDashboardComponent,],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, BrowserModule],
  exports: [ReactiveFormsModule, FormsModule],
  
})
export class AdminModule {}
