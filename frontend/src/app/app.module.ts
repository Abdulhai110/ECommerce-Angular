import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { RatingModule } from 'ngx-bootstrap/rating';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './main/app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { ChildComponent } from './child/child.component';
import { ProductDetailComponent } from './productDetail/productDetail.component';
import { NavComponent } from './nav/nav.component';
import { SideBarComponent } from './sideBar/sideBar.component';
import { ProductsService } from 'src/libs/products.service';
import { ShoppingCartService } from 'src/libs/shoppingCart.service';
import { AboutUsComponent } from './aboutUs/aboutUs.component';

@NgModule({
  declarations: [	
    AppComponent,
      DashboardComponent,
      MenComponent,
      WomenComponent,
      ChildComponent,
      ProductDetailComponent,
      NavComponent,
      SideBarComponent,
      AboutUsComponent
   ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    MatIconModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    RatingModule.forRoot(),
  ],
  providers: [
    ProductsService,
    ShoppingCartService,
  ],
  bootstrap: [AppComponent],
  // exports: [NavComponent],
})
export class AppModule { }
