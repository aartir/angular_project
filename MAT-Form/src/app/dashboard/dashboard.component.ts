import { Component, OnInit } from '@angular/core';
import { DashUsersService } from '../dash-users.service';
import {  HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

   count= 0;
  public endpoint="localhost:5000/record";
  headers=new Headers().set('Content-type','application/json');
  constructor(private http:HttpClient,private dashuser:DashUsersService) { }
  ngOnInit(){

    this.dashuser.getUsers().subscribe((item)=>{
      console.log(item);
      this.count=+item;
    })
    
  }
  
 
  
  
  


}
