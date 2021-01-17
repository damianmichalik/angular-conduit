import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserFavouritesComponent } from './user-favourites/user-favourites.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  {
    path: ':username',
    component: UserProfileComponent
  },
  {
    path: ':username/favourites',
    component: UserFavouritesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
