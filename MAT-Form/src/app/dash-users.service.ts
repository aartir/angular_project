import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import { HeaderRowOutlet } from '@angular/cdk/table';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashUsersService {

  constructor(private http:HttpClient) { }


  public endpoint="http://localhost:5000";
  headers=new Headers().set('Content-type','application/json');

  loginUser(data)
  {
    console.log("service data:"+data)
    return this.http.post(`${this.endpoint}/login`,JSON.parse(data))
  }
  getUsers(){
   return this.http.get(`${this.endpoint}/record`)
   
  }
  setUsers(data:any){
    console.log("service data"+data)
    
    return this.http.post(this.endpoint+'/add',JSON.parse(data));
  }

}
