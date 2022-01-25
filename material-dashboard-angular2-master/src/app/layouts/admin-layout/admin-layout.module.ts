import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import { ContactComponent } from 'app/contact/contact.component';
import { AccueilComponent } from 'app/accueil/accueil.component';
import { EvaluationCoursComponent } from 'app/evaluation-cours/evaluation-cours.component';
import { AdminStageEmploiComponent } from 'app/admin-stage-emploi/admin-stage-emploi.component';
import { CampusComponent } from 'app/campus/campus.component';
import { ConnexionComponent } from 'app/connexion/connexion.component';
import { DocumentsAdministratifsComponent } from 'app/documents-administratifs/documents-administratifs.component';
import { EcologieComponent } from 'app/ecologie/ecologie.component';
import { EdtComponent } from 'app/edt/edt.component';
import { ExamenComponent } from 'app/examen/examen.component';
import { ForumComponent } from 'app/forum/forum.component';
import { GestionComponent } from 'app/gestion/gestion.component';
import { InternationalComponent } from 'app/international/international.component';
import { ListeCoursComponent } from 'app/liste-cours/liste-cours.component';
import { ListeEnseignantsComponent } from 'app/liste-enseignants/liste-enseignants.component';
import { MoyStatsComponent } from 'app/moy-stats/moy-stats.component';
import { OffresStageEmploiComponent } from 'app/offres-stage-emploi/offres-stage-emploi.component';
import { ProfilComponent } from 'app/profil/profil.component';
import { ReleveNoteComponent } from 'app/releve-note/releve-note.component';
import { GestionOffresComponent } from 'app/gestion-offres/gestion-offres.component';
import { GestionCandidatureComponent } from 'app/gestion-candidature/gestion-candidature.component';
import { CandidatureComponent } from 'app/candidature/candidature.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    UpgradeComponent,
    AccueilComponent,
    ContactComponent,
    EvaluationCoursComponent,
    AdminStageEmploiComponent,
    CampusComponent,
    ConnexionComponent,
    DocumentsAdministratifsComponent,
    EcologieComponent,
    EdtComponent,
    ExamenComponent,
    ForumComponent,
    GestionComponent,
    InternationalComponent,
    ListeCoursComponent,
    ListeEnseignantsComponent,
    MoyStatsComponent,
    OffresStageEmploiComponent,
    ProfilComponent,
    ReleveNoteComponent,  
    GestionOffresComponent,
    GestionCandidatureComponent,
    CandidatureComponent,
  ]
})

export class AdminLayoutModule {}
