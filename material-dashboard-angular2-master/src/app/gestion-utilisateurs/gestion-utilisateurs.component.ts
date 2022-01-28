import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AppService } from 'app/app.service';
import { Personne } from 'app/Modeles/personne';
import { UtilisateurService } from 'app/service/utilisateur.service';

@Component({
  templateUrl: 'gestion-utilisateurs.component.html'
})
export class GestionUtilisateursComponent implements OnInit {
  personnes: any;
  utilisateur: Personne=new Personne();
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
    this.UtilisateurService.findAll().subscribe(data =>{this.personnes = data});
  }
 /* findByNomPersonne(){
    this.UtilisateurService.findByNomPersonne(this.nom).subscribe(data => {this.PersonneExtra = data});
  }*/
  deleteUtilisateur(id:number){
    this.UtilisateurService.delete(id).subscribe( () =>{this.findAll()} );
  }
 selectFile(event:any){
   this.selectedFiles = event.target.files;
 }
 saveUtilisateur(){
  this.currentFileUpload = this.selectedFiles?.item(0) as File; 
  this.UtilisateurService.save(this.currentFileUpload, this.utilisateur).subscribe(
    () => {this.findAll(); this.utilisateur = new Personne(); this.selectedFiles = undefined;}
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
