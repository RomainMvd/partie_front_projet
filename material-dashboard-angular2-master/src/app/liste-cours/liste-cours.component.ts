import { Component, OnInit } from '@angular/core';
declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/accueil', title: 'Accueil',  icon: 'home', class: '' },
  { path: '/connexion', title: 'Connexion',  icon:'key', class: '' },
  { path: '/profil', title: 'Profil',  icon:'person', class: '' },
  { path: '/vie-sur-le-campus', title: 'Vie sur le campus',  icon:'groups', class: '' },
  { path: '/engagements-ecologiques', title: 'Engagements écologiques',  icon:'park', class: '' },
  { path: '/international', title: 'International',  icon:'flight', class: '' },
  { path: '/contact', title: 'Contact',  icon:'phone', class: '' },
];


@Component({
  selector: 'liste-cours',
  templateUrl: './liste-cours.component.html',
  styleUrls: ['./liste-cours.component.css']
})
export class ListeCoursComponent implements OnInit {
  matieres: any[];

  constructor() { }

  ngOnInit() {
    this.matieres = ROUTES.filter(matiere => matiere);
  }
}
