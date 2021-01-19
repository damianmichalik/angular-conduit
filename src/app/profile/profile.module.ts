import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { ProfileRoutingModule } from "./profile-routing.module";
import { UserFavouritesComponent, UserInfoComponent, UserProfileComponent } from "./components";
import { ProfileService } from "./service/profile.service";
import { CommonModule } from "@angular/common";
import { ProfileResolver } from "./resolver/profile.resolver";

@NgModule({
  declarations: [
    UserProfileComponent,
    UserFavouritesComponent,
    UserInfoComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule
  ],
  providers: [
    ProfileService,
    ProfileResolver
  ]
})
export class ProfileModule {}
