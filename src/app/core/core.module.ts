import { NgModule } from "@angular/core";
import { ApiService } from "./api/api.service";
import { TagsService } from "./tags/tags.service";

@NgModule({
  providers: [
    TagsService,
    ApiService
  ]
})
export class CoreModule {}
