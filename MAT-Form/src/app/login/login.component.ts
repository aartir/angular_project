import { Component, OnInit } from '@angular/core';
import { DashUsersService } from '../dash-users.service'
import { FormGroup, FormControl} from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private dashUser:DashUsersService, private router:Router) {}
  loginForm=new FormGroup({
      email:new FormControl(''),
      password:new FormControl('')
  })


  ngOnInit() {
    
  }
  login()
  {
    var data=JSON.stringify(this.loginForm.value);
    console.log("Login data"+data)
   this.dashUser.loginUser(data).subscribe(
    result => {
      console.log(data)
      this.router.navigateByUrl('/dashboard')
    },
     (error)=>{console.log("error to fetch data");
   }) 
  }
}
