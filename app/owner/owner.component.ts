import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { emp } from '../employee/emp';
import { ApiService } from '../api.service';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css']
})
export class OwnerComponent implements OnInit {
alldata:any;
alldat:any;
modelobj:emp=new emp;
frm!:FormGroup
  constructor(private http:HttpClient,private Api:ApiService){}

  ngOnInit(): void {
    this.Getdata();
    this.Geetdata();
  }
  

  Geetdata(){
    this.http.get<any>("http://localhost:3000/seller").subscribe(res=>{
      this.alldat=res;
    },error=>{
      alert("not show")
    })
  }

  DeleteDataa(id:number){
    this.http.delete<any>("http://localhost:3000/seller/"+id).subscribe((res)=>{
      alert("data deleted succesfull");
      this.Geetdata();
  },
  error=>{

  alert("not delete")
    })
  }

  oneditt(data:any){
    this.modelobj.id=data.id
    this.frm.controls['name'].setValue(data.name),
    this.frm.controls['email'].setValue(data.email),
    this.frm.controls['mobile'].setValue(data.mobile),
    this.frm.controls['address'].setValue(data.address),
    this.frm.controls['password'].setValue(data.password)
    
  } 
  upp(){
  
  this.modelobj.name=this.frm.value.name;
  this.modelobj.email=this.frm.value.email;
  this.modelobj.mobile=this.frm.value.mobile;
  this.modelobj.address=this.frm.value.address;
  this.modelobj.password=this.frm.value.password;
  this.Api.updatedd(this.modelobj,this.modelobj.id) .subscribe(res=>{
  alert("data update successfully");
  this.Getdata();
  })}





//Purchase Detail


Getdata(){
    this.http.get<any>("http://localhost:3000/posts").subscribe(res=>{
      this.alldata=res;
    },error=>{
      alert("not show")
    })
  }
  DeleteData(id:number){
    this.http.delete<any>("http://localhost:3000/posts/"+id).subscribe((res)=>{
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
  up(){
  
  this.modelobj.name=this.frm.value.name;
  this.modelobj.email=this.frm.value.email;
  this.modelobj.mobile=this.frm.value.mobile;
  this.modelobj.address=this.frm.value.address;
  this.modelobj.password=this.frm.value.password;
  this.Api.updated(this.modelobj,this.modelobj.id) .subscribe(res=>{
  alert("data update successfully");
  this.Getdata();
  })}








}
