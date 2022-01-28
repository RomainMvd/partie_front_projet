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

  constructor(private candidatService:CandidatService) { }

  ngOnInit(): void {
  //  this.findAll()
  }

  // findAll(){
  //   this.candidatService.findAll().subscribe(data => {this.candidat = data})

  // }

}
