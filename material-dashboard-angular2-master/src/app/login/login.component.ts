import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AppService } from 'app/app.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent { 
  credentials = {username: '', password: ''}
  constructor(private appService:AppService, private httpClient: HttpClient,private router:Router){}
  login(){
    console.log("username="+this.credentials.username);
    console.log("password="+this.credentials.password);
    this.appService.authenticate(this.credentials,()=>{this.router.navigateByUrl("/base/forms")});
    return false;
  }
}
