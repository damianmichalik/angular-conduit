import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserFavouritesComponent } from './components/user-favourites/user-favourites.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { ProfileResolver } from './resolver/profile.resolver';

const routes: Routes = [
  {
    path: ':username',
    component: UserProfileComponent,
    resolve: {
      profile: ProfileResolver
    }
  },
  {
    path: ':username/favourites',
    component: UserFavouritesComponent,
    resolve: {
      profile: ProfileResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
