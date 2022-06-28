import { Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
//Crée le routeur avec 3 routes, une sur signup,
// une sur user et
// une par défaut qui affiche le composant <user-profile/>
export const ROUTES: Routes = [
  {
    path: 'signup',
    component: SignUpComponent,
  },
  {
    path: 'user',
    component: UserProfileComponent,
  },
  {
    path:'',
    component: UserProfileComponent,
  }
];
