import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ArticlePageComponent } from "./article-page/article-page.component";
import { ArticlePreviewComponent } from "./article-preview/article-preview.component";

@NgModule({
  declarations: [
    ArticlePageComponent,
    ArticlePreviewComponent
  ],
  exports: [
    ArticlePageComponent,
    ArticlePreviewComponent
  ],
  imports: [
    RouterModule
  ]
})
export class ArticleModule {}
