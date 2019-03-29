import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {DetailComponent} from './detail/detail.component';
import {FormationsComponent} from './formations/formations.component';
import {ConnaissancesComponent} from './connaissances/connaissances.component';
import {PATH_HOME, PATH_DETAIL, PATH_DETAIL_FORMATIONS, PATH_DETAIL_SKILLS} from './app.routes.constantes';
import {LoggedInGuardGuard} from "./logged-in-guard.guard";
import {LoggedInGuardChildGuard} from "./logged-in-guard-child.guard";
import {FormationsResolversComponent} from "./formations-resolvers/formations-resolvers.component";

export const ROUTES: Routes = [
  {path: PATH_HOME, component: HomeComponent},
  {path: PATH_DETAIL + '/:idDetail',
    component: DetailComponent,
    canActivateChild: [LoggedInGuardChildGuard],

    children: [
      { path: '', pathMatch: 'full', redirectTo: PATH_HOME },

      { path: PATH_DETAIL_SKILLS, component: ConnaissancesComponent ,canActivate: [LoggedInGuardGuard] }
    ]


  }
];
