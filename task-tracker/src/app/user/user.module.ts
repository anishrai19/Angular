import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonComponent } from './button/button.component';
import { TaskContainerComponent } from './task-container/task-container.component';
import { SingleTaskComponent } from './single-task/single-task.component';

import { ReactiveFormsModule } from '@angular/forms';
import { UploadModelComponent } from './upload-model/upload-model.component';


@NgModule({
  declarations: [

    ButtonComponent,
    TaskContainerComponent,
    SingleTaskComponent,
    UploadModelComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule],
})
export class UserModule {}
