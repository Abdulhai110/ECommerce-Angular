import { MatDialog } from '@angular/material/dialog';
import { RatingModule } from 'ngx-bootstrap/rating';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from '../nav/nav.component';
import { AppModule } from '../app.module';

import { CartComponent } from './cart/cart.component';
import { AuthService } from './../../libs/auth.service';
import { ResetComponent } from './resetPassword/resetPassword.component';
import { ForgotComponent } from './forgot/forgot.component';
import { AuthRouting } from './auth.routing';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from '../auth/authMain/auth.component';
import { PaymentSuccessComponent } from './payment-success/payment-success.component';

@NgModule({
  imports: [
    // AppModule,
    FormsModule,
    AuthRouting,
    CommonModule,
    RatingModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  declarations: [
    AuthComponent,
    CartComponent,
    LoginComponent,
    ResetComponent,
    ForgotComponent,
    RegisterComponent,
    PaymentSuccessComponent,
  ],
  providers: [
    // NavComponent,
    AuthService,
    MatDialog,
  ],
})
export class AuthModule { }
