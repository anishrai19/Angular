import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MonthlyViewComponent } from './monthly-view/monthly-view.component';
import { ButtonComponent } from './button/button.component';
import { YearlyViewComponent } from './yearly-view/yearly-view.component';
import { NgChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    ToolbarComponent,
    MonthlyViewComponent,
    ButtonComponent,
    YearlyViewComponent,
  ],
  imports: [CommonModule, NgChartsModule],
})
export class UserModule {}
