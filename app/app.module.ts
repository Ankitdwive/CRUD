import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { SignupComponent } from './signup/signup.component';
import { DooterComponent } from './dooter/dooter.component';
import { IndexComponent } from './index/index.component';
import { OwnerComponent } from './owner/owner.component';
import { SellerComponent } from './seller/seller.component';
import { LoginnComponent } from './loginn/loginn.component';
import { MainComponent } from './main/main.component';
import { PurchasesignupComponent } from './purchasesignup/purchasesignup.component';
import { PurchaseloginComponent } from './purchaselogin/purchaselogin.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { LastComponent } from './last/last.component';
//import { OwnermComponent } from './ownerm/ownerm.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    LoginComponent,
    HeaderComponent,
    SignupComponent,
    DooterComponent,
    IndexComponent,
    OwnerComponent,
    SellerComponent,
    LoginnComponent,
    MainComponent,
    PurchasesignupComponent,
    PurchaseloginComponent,
    PurchaseComponent,
    LastComponent,
   // OwnermComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
