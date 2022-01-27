import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'matiere',
  templateUrl: './matiere.component.html',
  styleUrls: ['./matiere.component.css']
})
export class MatiereComponent implements OnInit {
  sujets: any[];
  matiere: any;


  constructor() { }

  ngOnInit(): void {
  }

}
