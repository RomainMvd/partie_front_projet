import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AppService } from 'app/app.service';
import { Personne } from 'app/Modeles/personne';
import { UtilisateurService } from 'app/service/utilisateur.service';

@Component({
  templateUrl: 'forms.component.html'
})
export class GestionUtilisateursComponent implements OnInit {
  Personnes: any;
  Personne: Personne=new Personne();
  // PersonneExtra: Personne[];
  selectedFiles?: FileList;
  currentFileUpload?: File;
 // nom:string;
  constructor(private appService:AppService,private UtilisateurService: UtilisateurService, private router:Router) { }
  
  ngOnInit(): void {
    this.findAll();
    //this.nom = '';
    //this.findByNomPersonne();
  }
  /*onSubmit(){
    this.findByNomPersonne();
  }*/
  findAll(){
    this.UtilisateurService.findAll().subscribe(data =>{this.Personnes = data});
  }
 /* findByNomPersonne(){
    this.UtilisateurService.findByNomPersonne(this.nom).subscribe(data => {this.PersonneExtra = data});
  }*/
  deletePersonne(id:number){
    this.UtilisateurService.delete(id).subscribe( () =>{this.findAll()} );
  }
 selectFile(event:any){
   this.selectedFiles = event.target.files;
 }
 savePersonne(){
  this.currentFileUpload = this.selectedFiles?.item(0) as File; 
  this.UtilisateurService.save(this.currentFileUpload, this.Personne).subscribe(
    () => {this.findAll(); this.Personne = new Personne(); this.selectedFiles = undefined;}
  )  
 }
 editUser(user:Personne){
   localStorage.removeItem("editUserId");
   localStorage.setItem("editUserId",user.idPersonne.toString());
  this.router.navigate(['/base/editUser',user.idPersonne]);   
 }
 authenticated(){
   return this.appService.authenticated;
 }
 log(){
   if(this.appService.isAdmin==true && this.appService.isUser == true){
     return true;
   }
   else{
     return false;
   }
 }
}
