import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptor } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';
import { ButtonComponent } from './templete/button/button.component';
// import { routingComponents } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UserModule } from './user/user.module';
import { CommonModule } from '@angular/common';
import { AdminModule } from './admin/admin.module';
import { AuthGuard } from './auth.guard';

import { TokenInterceptorService } from './token-interceptor.service';

@NgModule({
  declarations: [AppComponent, ButtonComponent],
  imports: [
    BrowserModule,
    CommonModule,
    // routingComponents,
    AppRoutingModule,
    AuthModule,
    UserModule,
    AdminModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
