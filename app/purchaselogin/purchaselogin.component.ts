import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-purchaselogin',
  templateUrl: './purchaselogin.component.html',
  styleUrls: ['./purchaselogin.component.css']
})
export class PurchaseloginComponent {

  frmm!:FormGroup;
  constructor(private fb:FormBuilder,private http:HttpClient,private route:Router){}
  ngOnInit(): void {
    this.frmm=this.fb.group({
      name:[''],
      password:['']
    })}
    Login(){
      this.http.get<any>("http://localhost:3000/psignup").subscribe(res=>{
        const user=res.find((a:any)=>{
          return a.name == this.frmm.value.name && a.password==this.frmm.value.password

        })
        if(user){
          alert("Account login sucessfully");
          this.frmm.reset();
          this.route.navigate(['purchase'])
        }else{
          alert("user not found");
        }
       } ,error=>{
        alert("error");
       
         })
      }
}



