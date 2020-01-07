import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DashUsersService } from '../dash-users.service'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private dashuser:DashUsersService){}
   form = new FormGroup({
    fname: new FormControl(''),
    lname: new FormControl(''),
    address: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    dob: new FormControl(''),
    gender: new FormControl('')
  })
  ngOnInit() {
    
  }
  
  register()
  {
   var newDate=this.form.value.dob;
    var strdate=newDate.toISOString().slice(0,10)
    this.form.patchValue({
      dob:strdate
    });
    console.log(this.form.value)
    var data= JSON.stringify(this.form.value)
    this.dashuser.setUsers(data).subscribe((data)=>{
      console.log(data)
    })
  }


}
