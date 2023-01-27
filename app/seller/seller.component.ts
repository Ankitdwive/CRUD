import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {

  formvalue!:FormGroup;
  constructor(private fb:FormBuilder,private http:HttpClient,private route:Router){}

  ngOnInit(): void {
    this.formvalue=this.fb.group({
      name:['',Validators.required],
      address:['',Validators.required],
      mobile:['',[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      email:['',Validators.required],
      password:['',[Validators.required , Validators.pattern('^((?!.*[s])(?=.*[A-Z])(?=.*[a-z]).{8,99})')]]

    })
    
  }
  addData(){
    this.http.post<any>("http://localhost:3000/seller",this.formvalue.value).subscribe(res=>{
alert("seller detail add success fully thanks visit my web side");
//this.route.navigate(['employee'])

  },
  error=>{
    alert("data no insert");
  }
    )
  }
  get f() { return this.formvalue.controls; }

}
