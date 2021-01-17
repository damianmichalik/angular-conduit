import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "../app-routing.module";
import { ArticleModule } from "../article/article.module";
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
    RouterModule,
    SharedModule
  ]
})
export class HomeModule {}
