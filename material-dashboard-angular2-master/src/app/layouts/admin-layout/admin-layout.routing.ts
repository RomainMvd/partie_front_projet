import { Routes } from '@angular/router';

import { AccueilComponent } from 'app/accueil/accueil.component';
import { ContactComponent } from 'app/contact/contact.component';
import { CampusComponent } from 'app/campus/campus.component';
import { EcologieComponent } from 'app/ecologie/ecologie.component';
import { ConnexionComponent } from 'app/connexion/connexion.component';
import { InternationalComponent } from 'app/international/international.component';
import { ProfilComponent } from 'app/profil/profil.component';
import { EdtComponent } from 'app/edt/edt.component';
import { OffresStageEmploiComponent } from 'app/offres-stage-emploi/offres-stage-emploi.component';
import { ExamenComponent } from 'app/examen/examen.component';
import { DocumentsAdministratifsComponent } from 'app/documents-administratifs/documents-administratifs.component';
import { ReleveNoteComponent } from 'app/releve-note/releve-note.component';
import { ForumComponent } from 'app/forum/forum.component';
import { ListeEnseignantsComponent } from 'app/liste-enseignants/liste-enseignants.component';
import { ListeCoursComponent } from 'app/liste-cours/liste-cours.component';
import { GestionComponent } from 'app/gestion/gestion.component';
import { MoyStatsComponent } from 'app/moy-stats/moy-stats.component';
import { CompteEtudiantComponent } from 'app/compte-etudiant/compte-etudiant.component';
import { AdminStageEmploiComponent } from 'app/admin-stage-emploi/admin-stage-emploi.component';
import { EvaluationCoursComponent } from 'app/evaluation-cours/evaluation-cours.component';
import { GestionCandidatureComponent } from 'app/gestion-candidature/gestion-candidature.component';
import { CandidatureComponent } from 'app/candidature/candidature.component';
import { GestionOffresComponent } from 'app/gestion-offres/gestion-offres.component';
import { MatiereComponent } from 'app/matiere/matiere.component';
import { GestionUtilisateursComponent } from 'app/gestion-utilisateurs/gestion-utilisateurs.component';

export const AdminLayoutRoutes: Routes = [
 
    { path: 'accueil',      component: AccueilComponent },
    { path: 'connexion',   component: ConnexionComponent },
    { path: 'international',          component: InternationalComponent },
    { path: 'vie-sur-le-campus',           component: CampusComponent },
    { path: 'engagements-ecologiques',        component: EcologieComponent },
    { path: 'contact',        component: ContactComponent },
    { path: 'profil',        component: ProfilComponent },
    { path: 'edt',        component: EdtComponent },
    { path: 'listecours',        component: ListeCoursComponent },
    { path: 'listeenseignants',        component: ListeEnseignantsComponent },
    { path: 'forum',        component: ForumComponent },
    { path: 'relevenotes',        component: ReleveNoteComponent },
    { path: 'documentsadministratifs',        component: DocumentsAdministratifsComponent },
    { path: 'examenenligne',        component: ExamenComponent },
    { path: 'offresstageemplois',        component: OffresStageEmploiComponent },
    { path: 'gestion',        component: GestionComponent },
    { path: 'moy-stats',        component: MoyStatsComponent },
    { path: 'compte-etudiant',        component: CompteEtudiantComponent },
    { path: 'admin-stage-emplois',        component: AdminStageEmploiComponent },
    { path: 'evaluation-cours',        component: EvaluationCoursComponent },
    { path: 'gestion-candidature',        component: GestionCandidatureComponent },
    { path: 'candidature',        component: CandidatureComponent },
    { path: 'gestion-offres',        component: GestionOffresComponent },
    { path: 'matiere',        component: MatiereComponent },
    { path: 'gestion-utilisateurs', component: GestionUtilisateursComponent},
];
