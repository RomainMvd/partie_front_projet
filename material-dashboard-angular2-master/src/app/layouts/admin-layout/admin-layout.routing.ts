import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { AccueilComponent } from 'app/accueil/accueil.component';
import { ContactComponent } from 'app/contact/contact.component';
import { CampusComponent } from 'app/campus/campus.component';
import { EcologieComponent } from 'app/ecologie/ecologie.component';
import { ConnexionComponent } from 'app/connexion/connexion.component';
import { InternationalComponent } from 'app/international/international.component';
import { ProfilComponent } from 'app/profil/profil.component';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'accueil',      component: AccueilComponent },
    { path: 'connexion',   component: ConnexionComponent },
    { path: 'international',          component: InternationalComponent },
    { path: 'vie-sur-le-campus',           component: CampusComponent },
    { path: 'engagements-ecologiques',        component: EcologieComponent },
    { path: 'contact',        component: ContactComponent },
    { path: 'profil',        component: ProfilComponent },
];
