import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  updated(data:any, id:number){
   return this.http.put<any>("http://localhost:3000/posts/"+id,data)
  }

  updatedd(data:any, id:number){
    return this.http.put<any>("http://localhost:3000/seller/"+id,data)
   }
 

  
}
