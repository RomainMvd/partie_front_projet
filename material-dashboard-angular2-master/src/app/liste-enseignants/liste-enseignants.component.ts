import { Component, OnInit } from '@angular/core';
import { Enseignant } from 'app/Modeles/enseignant';
import { EnseignantService } from 'app/service/enseignant.service';

@Component({
  selector: 'liste-enseignants',
  templateUrl: './liste-enseignants.component.html',
  styleUrls: ['./liste-enseignants.component.css']
})
export class ListeEnseignantsComponent implements OnInit {
  enseignants:any;
  enseignant : Enseignant = new Enseignant();
  
  constructor(private enseignantService: EnseignantService) { }

  ngOnInit(): void {
    this.findAll();
  }
  findAll(){
    console.log("Je suis le findAll du composant");
    this.enseignantService.findAll().subscribe(data =>{this.enseignants = data});
  }
}
