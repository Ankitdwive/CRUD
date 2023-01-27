import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-loginn',
  templateUrl: './loginn.component.html',
  styleUrls: ['./loginn.component.css']
})
export class LoginnComponent {

  name:string='Ankit Dwivedi';
  password:string='123456';



  frmm!:FormGroup;
  constructor(private fb:FormBuilder,private http:HttpClient,private route:Router){}
  ngOnInit(): void {
    this.frmm=this.fb.group({
      name:[''],
  password:['']
    })}
    Login(){
      this.name='Ankit Dwivedi';
      this.password='123456';
        const user=
           this.name == this.frmm.value.name && this.password==this.frmm.value.password

        
        if(user){
          alert("Owner login sucessfully");
          this.frmm.reset();
          this.route.navigate(['owner'])
        }else{
          alert("user not found");
        }
       } }



