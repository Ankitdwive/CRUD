import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

frm!:FormGroup;
  constructor(private fb:FormBuilder,private http:HttpClient,private route:Router){}
  ngOnInit(): void {
    this.frm=this.fb.group({
      name:[''],
      password:['']
    })}
    Login(){
      this.http.get<any>("http://localhost:3000/signup").subscribe(res=>{
        
        const user=res.find((a:any)=>{
          return a.name == this.frm.value.name && a.password==this.frm.value.password

        })
        if(user){
          alert("Account login sucessfully");
          this.frm.reset();
          this.route.navigate(['employee'])
        }else{
          alert("user not found");
        }
       } ,error=>{
        alert("error");
       
         })
      }
    }      

