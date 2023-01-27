import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-purchasesignup',
  templateUrl: './purchasesignup.component.html',
  styleUrls: ['./purchasesignup.component.css']
})
export class PurchasesignupComponent {

submitted=false;


  frmg!:FormGroup;
  constructor(private fb:FormBuilder,private http: HttpClient){}

  ngOnInit(): void {
    this.frmg=this.fb.group({
      name:['',Validators.required],
      email:['',Validators.required],
      address:['',Validators.required],
      mobile:['',Validators.required],
      password:['',Validators.required]
    })
  }
  get f(){
    return this.frmg.controls;
  }
  Adddata(){
    this.submitted=true;
    if(this.frmg.invalid){
      return
    }
    this.http.post<any>("http://localhost:3000/psignup",this.frmg.value).subscribe(any=>{
alert("Account Open Successfully");
  },
  error=>{
    alert("not inserted");
    })
  }

}

