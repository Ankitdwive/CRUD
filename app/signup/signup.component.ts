import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  surveyForm!:FormGroup;
  submitted=false;
  constructor(private formBuilder:FormBuilder,private http:HttpClient, private route:Router){}
  ngOnInit(){
    this.surveyForm = this.formBuilder.group({
      name: ['',Validators.required ],
      email:['' ,Validators.required],
      address:['',Validators.required],
      mobile:['',Validators.required],
      password:['',Validators.required]
     });

   }  
   //name = new FormControl('');
   get f() { return this.surveyForm.controls; }

    onSubmit() {
    this.submitted = true;
    if (this.surveyForm.invalid) {
      return;
  }

   // stop here if form is invalid
   

   this.http.post<any>("http://localhost:3000/posts",this.surveyForm.value).subscribe(any=>{
    console.log(any);
alert("Account open  Successfully ");  
this.route.navigate(['login']);
   this.onReset();
  },
  error=>{
    alert("not inserted");
    })

}
onReset() {
  this.submitted = false;
  this.surveyForm.reset();
   }
}
