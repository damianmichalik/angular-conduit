import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ArticleModule } from "../article/article.module";
import { SettingsComponent } from "./settings/settings.component";
import { UserFavouritesComponent } from "./user-favourites/user-favourites.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";

@NgModule({
  declarations: [
    SettingsComponent,
    UserProfileComponent,
    UserFavouritesComponent
  ],
  exports: [
    SettingsComponent,
    UserProfileComponent,
    UserFavouritesComponent
  ],
  imports: [
    RouterModule,
    ArticleModule
  ]
})
export class ProfileModule {}
