import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { IndexComponent } from './index/index.component';
import { LastComponent } from './last/last.component';
import { LoginComponent } from './login/login.component';
import { LoginnComponent } from './loginn/loginn.component';
import { OwnerComponent } from './owner/owner.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { PurchaseloginComponent } from './purchaselogin/purchaselogin.component';
import { PurchasesignupComponent } from './purchasesignup/purchasesignup.component';
import { SellerComponent } from './seller/seller.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
 // {path:"/login",component:LoginComponent},
  {path:"employee",component:EmployeeComponent},
  
  {path:"login",component:LoginComponent},
  {path:"purchases",component:PurchasesignupComponent},
  {path:"purchasel",component:PurchaseloginComponent},
  {path:"sign",component:SignupComponent},
  {path:"purchase",component:PurchaseComponent},
  {path:"index",component:IndexComponent},
  {path:"owner",component:OwnerComponent},
  {path:"seller",component:SellerComponent},
  {path:"last",component:LastComponent},
  {path:"loginn",component:LoginnComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
