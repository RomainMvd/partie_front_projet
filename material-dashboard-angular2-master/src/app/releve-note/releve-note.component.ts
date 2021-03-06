import { Component, OnInit } from '@angular/core';
import { CoursService } from 'app/service/cours.service';
import { Cours } from '../Modeles/cours';
import { Etudiant } from '../Modeles/etudiant';

@Component({
  selector: 'app-releve-note',
  templateUrl: './releve-note.component.html',
  styleUrls: ['./releve-note.component.css']
})
export class ReleveNoteComponent implements OnInit {
  courss: any;
  cours: Cours= new Cours();
  etudiant: Etudiant=new Etudiant();
  
  constructor(private coursService: CoursService) { }

  ngOnInit(): void {
    this.findAll();
  }
  findAll(){
    this.coursService.findAll().subscribe(data =>{this.courss = data});
  }
}
