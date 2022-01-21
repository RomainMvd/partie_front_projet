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
    { path: '/profil', title: 'Profil',  icon:'person', class: '' },
    { path: '/vie-sur-le-campus', title: 'Vie sur le campus',  icon:'groups', class: '' },
    { path: '/engagements-ecologiques', title: 'Engagements écologiques',  icon:'park', class: '' },
    { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
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
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
