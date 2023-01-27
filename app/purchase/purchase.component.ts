import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';
import { pur } from './pur';
import { Router } from '@angular/router';


@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {


  modelobj:pur=new pur
frm!:FormGroup;
alldata:any;
  constructor(private fb:FormBuilder,private http:HttpClient, private Api:ApiService,private route:Router){}


submitted=false;
  ngOnInit(): void {
    this.frm=this.fb.group({
      name:['',Validators.required],
      email:['',Validators.required],
      mobile:['',Validators.required],
      address:['',Validators.required],
      city:['',Validators.required],
      password:['',Validators.required]
      })
    this.Getdata();
  }
  get f(){
    return(this.frm.controls)
  }
  AddData(){
    this.submitted=true;
    if(this.frm.invalid){
      return;
    }
    this.http.post<any>("http://localhost:3000/seller",this.frm.value).subscribe(res=>{
      this.alldata=res;
      this.Getdata();
      this.frm.reset();
      console.log(this.alldata)
      alert("data Registered Successfully thanks visit my web side");
      this.route.navigate(['last'])
  },
  error=>{
    alert("not");
    })}
  

   Getdata(){
      this.http.get<any>("http://localhost:3000/seller").subscribe(res=>{
        this.alldata=res;
      },error=>{
        alert("not show")
      })
    }
    
   
    DeleteData(id:number){
      this.http.delete<any>("http://localhost:3000/seller/"+id).subscribe((res)=>{
        alert("data deleted succesfull");
        this.Getdata();
    },
    error=>{

    alert("not delete")
      })
    }

    onedit(data:any){
      this.modelobj.id=data.id
      this.frm.controls['name'].setValue(data.name),
      this.frm.controls['email'].setValue(data.email),
      this.frm.controls['mobile'].setValue(data.mobile),
      this.frm.controls['address'].setValue(data.address),
      this.frm.controls['password'].setValue(data.password)
      
    } 
}
