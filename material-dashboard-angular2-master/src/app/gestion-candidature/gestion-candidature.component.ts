import { Component, OnInit } from '@angular/core';
import { Candidat } from 'app/Modeles/candidat';
import { CandidatService } from 'app/service/candidat.service';

@Component({
  selector: 'gestion-candidature',
  templateUrl: './gestion-candidature.component.html',
  styleUrls: ['./gestion-candidature.component.css']
})
export class GestionCandidatureComponent implements OnInit {
  candidats: any;
  candidat: Candidat = new Candidat ();
  selectedFiles?: FileList;
  currentFileUpload?:File;

  constructor(private candidatService:CandidatService) { }

  ngOnInit(): void {
 this.findAll()
  }
  findAll(){
    this.candidatService.findAll().subscribe(data => {this.candidats = data})
  }
  selectFile(event:any){
    this.selectedFiles = event.target.files; //choix d'un fichier
  }
  saveUser(){
    this.currentFileUpload = this.selectedFiles?.item(0) as File; 
    this.candidatService.saveCandidat(this.currentFileUpload, this.candidat).subscribe(
      () => {this.findAll(); this.candidat = new Candidat(); this.selectedFiles = undefined} 
      //this.selectedFiles = undefined pour déselectionner le fichier quand on rafraichit
    )
  }

}
