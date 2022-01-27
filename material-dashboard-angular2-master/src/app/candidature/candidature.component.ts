import { Component, OnInit } from '@angular/core';
import { Candidat } from 'app/Modeles/candidat';
import { CandidatService } from 'app/service/candidat.service';

@Component({
  selector: 'candidature',
  templateUrl: './candidature.component.html',
  styleUrls: ['./candidature.component.css']
})
export class CandidatureComponent implements OnInit {

  candidats: any;
  candidat: Candidat = new Candidat ();


  constructor(private candidatService: CandidatService) { }

  ngOnInit(): void {
  }
saveCandidat(){
  
}
}