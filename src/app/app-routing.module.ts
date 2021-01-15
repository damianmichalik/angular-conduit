import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticlePageComponent } from './article/article-page/article-page.component';
import { HomepageComponent } from './home/homepage/homepage.component';

const routes: Routes = [
  {
    path: 'article/:slug',
    component: ArticlePageComponent
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
