import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticlePageComponent } from './article/article-page/article-page.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { CreateComponent } from './editor/create/create.component';
import { EditComponent } from './editor/edit/edit.component';
import { HomepageComponent } from './home/homepage/homepage.component';
import { SettingsComponent } from './profile/settings/settings.component';
import { UserFavouritesComponent } from './profile/user-favourites/user-favourites.component';
import { UserProfileComponent } from './profile/user-profile/user-profile.component';

const routes: Routes = [
  {
    path: 'article/:slug',
    component: ArticlePageComponent
  },
  {
    path: 'profile/:username',
    component: UserProfileComponent
  },
  {
    path: 'profile/:username/favourites',
    component: UserFavouritesComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  },
  {
    path: 'editor',
    component: CreateComponent
  },
  {
    path: 'editor/:slug',
    component: EditComponent
  },
  {
    path: '',
    component: HomepageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
