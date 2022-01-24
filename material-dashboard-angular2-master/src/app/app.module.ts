import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ContactComponent } from './contact/contact.component';
import { CampusComponent } from './campus/campus.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { EcologieComponent } from './ecologie/ecologie.component';
import { InternationalComponent } from './international/international.component';
import { ListeCoursComponent } from './liste-cours/liste-cours.component';
import { ProfilComponent } from './profil/profil.component';
import { ListeEnseignantsComponent } from './liste-enseignants/liste-enseignants.component';
import { EdtComponent } from './edt/edt.component';
import { ReleveNoteComponent } from './releve-note/releve-note.component';
import { DocumentsAdministratifsComponent } from './documents-administratifs/documents-administratifs.component';
import { ExamenComponent } from './examen/examen.component';
import { ForumComponent } from './forum/forum.component';
import { OffresStageEmploiComponent } from './offres-stage-emploi/offres-stage-emploi.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    CampusComponent,
    ConnexionComponent,
    EcologieComponent,
    InternationalComponent,
    ListeCoursComponent,
    ProfilComponent,
    ListeEnseignantsComponent,
    EdtComponent,
    ReleveNoteComponent,
    DocumentsAdministratifsComponent,
    ExamenComponent,
    ForumComponent,
    OffresStageEmploiComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
