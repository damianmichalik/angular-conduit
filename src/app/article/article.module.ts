import { NgModule } from "@angular/core";
import { ArticlePageComponent } from "./article-page/article-page.component";
import { ArticleRoutingModule } from "./article-routing.module";

@NgModule({
  declarations: [
    ArticlePageComponent
  ],
  imports: [
    ArticleRoutingModule
  ]
})
export class ArticleModule {}
