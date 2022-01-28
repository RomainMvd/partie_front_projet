import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppService } from 'app/app.service';

@Component({
  selector: 'connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  credentials = {username: '', password: ''}
  constructor(private appService:AppService, private httpClient: HttpClient,private router:Router){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  login(){
    console.log("username="+this.credentials.username);
    console.log("password="+this.credentials.password);
    this.appService.authenticate(this.credentials,()=>{this.router.navigateByUrl("./gestion-utilisateurs")});
    return false;
  }
}