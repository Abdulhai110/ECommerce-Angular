import { PaymentSuccessComponent } from './payment-success/payment-success.component';
import { CartComponent } from './cart/cart.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForgotComponent } from './forgot/forgot.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './notFound/notFound.component';
import { RegisterComponent } from './register/register.component';
import { ResetComponent } from './resetPassword/resetPassword.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'forgot',component:ForgotComponent},
  {path:'reset/:id',component:ResetComponent},
  {path:'cart',component:CartComponent},
  {path:'paymentSuccess',component:PaymentSuccessComponent},
  {path:'**',component:NotFoundComponent},
];

// export const AuthRoutes = RouterModule.forChild(routes);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRouting { }
