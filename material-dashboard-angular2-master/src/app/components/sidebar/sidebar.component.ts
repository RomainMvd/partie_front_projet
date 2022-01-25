import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    
    { path: '/connexion', title: 'Connexion',  icon:'key', class: '' },
    { path: '/candidature', title: 'Candidature',  icon:'phone', class: '' },
    { path: '/vie-sur-le-campus', title: 'Vie sur le campus',  icon:'groups', class: '' },
    { path: '/engagements-ecologiques', title: 'Engagements écologiques',  icon:'park', class: '' },
    { path: '/international', title: 'International',  icon:'flight', class: '' },
    { path: '/contact', title: 'Contact',  icon:'phone', class: '' },

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
}
