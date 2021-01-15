import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "../app-routing.module";
import { ArticleModule } from "../article/article.module";
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
    ArticleModule
  ]
})
export class HomeModule {}
