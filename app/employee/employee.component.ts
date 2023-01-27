import { Component,OnInit } from '@angular/core';
import {HttpClient}from '@angular/common/http';
import { FormBuilder,FormGroup } from '@angular/forms';
import { emp } from './emp';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
modelobj:emp=new emp;
frm!:FormGroup;
alldata:any;
  constructor(private fb:FormBuilder,private http:HttpClient, private Api:ApiService,private route:Router){}



  ngOnInit(): void {
    this.frm=this.fb.group({
      name:[''],
      email:[''],
      mobile:[''],
      address:[''],
      city:[''],
      password:['']
      })
    this.Getdata();
  }
  AddData(){
    this.http.post<any>("http://localhost:3000/posts",this.frm.value).subscribe(res=>{
      this.alldata=res;
      this.Getdata();
      this.frm.reset();
      console.log(this.alldata)
      alert("data Register Successfully thanks visit my side");
      this.route.navigate(['last'])

  },
  error=>{
    alert("not");
    })}
  

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
    /*up(){
      this.modelobj.name=this.frm.value.name;
      this.modelobj.address=this.frm.value.address;
    this.modelobj.mobile=this.frm.value.mobile;
    this.modelobj.password=this.frm.value.password;
    console.log(this.modelobj, this.modelobj.id+" updated")
    this.Api.updated( this.modelobj.id).subscribe(res=>{
    alert("updated")
    })*/
    
    
    
    
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