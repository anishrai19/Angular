import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { FormControl, FormGroup } from '@angular/forms';
// import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { FormateComponent } from './formate/formate.component';
import { StorageComponent } from './storage/storage.component';
import { BarMenuComponent } from './storage/bar-menu/bar-menu.component';
import { FilesComponent } from './storage/files/files.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    // LoginComponent
    FormateComponent,
    StorageComponent,
    BarMenuComponent,
    FilesComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  exports: [ReactiveFormsModule, FormsModule],
})
export class UserModule {}
