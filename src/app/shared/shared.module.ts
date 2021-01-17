import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ArticlePreviewComponent } from "./article-preview/article-preview.component";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ArticlePreviewComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ArticlePreviewComponent
  ],
  imports: [
    RouterModule
  ]
})
export class SharedModule {}
