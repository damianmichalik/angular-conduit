import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CoreModule } from "../core/core.module";
import { SharedModule } from "../shared/shared.module";
import { HomepageComponent } from "./homepage/homepage.component";

@NgModule({
  declarations: [
    HomepageComponent
  ],
  exports: [
    HomepageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    CoreModule
  ]
})
export class HomeModule {}
