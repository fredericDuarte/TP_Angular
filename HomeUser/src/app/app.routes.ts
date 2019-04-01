import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PageComponent} from './page/page.component';


import {PATH_HOME, PATH_PAGE} from './app.routes.constantes';
import {UserResolvers} from './user-resolvers/user-resolvers.';
import {FollowersResolvers} from "./user-resolvers/followers-resolvers.";
import {ReposResolvers} from "./user-resolvers/repos-resolvers.";


export const ROUTES: Routes = [

  {path: PATH_HOME, component: HomeComponent},
  {
    path: PATH_PAGE + '/:idLogin', component: PageComponent,
     resolve: {
       user: UserResolvers,
       userList: FollowersResolvers,
       userList2: ReposResolvers

     },
    children: [
      {path: '', pathMatch: 'full', redirectTo: PATH_HOME},

    ]
  }
];
