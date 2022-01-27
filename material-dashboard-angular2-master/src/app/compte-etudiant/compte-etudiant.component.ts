import { Component, OnInit } from '@angular/core';
import { Etudiant } from 'app/Modeles/etudiant';
import { EtudiantService } from 'app/service/etudiant.service';

@Component({
  selector: 'compte-etudiant',
  templateUrl: './compte-etudiant.component.html',
  styleUrls: ['./compte-etudiant.component.css']
})
export class CompteEtudiantComponent implements OnInit {

  etudiants: any;
  etudiant: Etudiant = new Etudiant ();


  constructor(private etudiantService: EtudiantService) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(){
    this.etudiantService.findAll().subscribe(data => {this.etudiants = data})
  }

  deleteEtudiant(id:number){
    this.etudiantService.deleteEtudiant(id).subscribe(() => {this.findAll()})
  }

  saveEtudiant(){
    console.log("test bug")
    this.etudiantService.saveEtudiant(this.etudiant).subscribe(() => {
      this.findAll();
      this.etudiant = new Etudiant ();
    })
  }
}
