import { Component, OnInit } from '@angular/core';
import { Evaluation } from 'app/Modeles/evaluation';
import { EvaluationService } from 'app/service/evaluation.service';

@Component({
  selector: 'evaluation-cours',
  templateUrl: './evaluation-cours.component.html',
  styleUrls: ['./evaluation-cours.component.css']
})
export class EvaluationCoursComponent implements OnInit {
  evaluation: Evaluation= new Evaluation();
  
  constructor(private evaluationService: EvaluationService) { }

  ngOnInit(): void {
  }

  deleteRole(id:number){
    console.log("identifiant niveau composant:"+id);
    this.evaluationService.deleteEvaluation(id).subscribe();
  }

  saveEvaluation(){
    this.evaluationService.saveEvaluation(this.evaluation).subscribe( () => {
      this.evaluation = new Evaluation(); // pour vider le formulaire
    })
  }

  noterCours(note){
    this.evaluation.noteCours=note;
  }
}
