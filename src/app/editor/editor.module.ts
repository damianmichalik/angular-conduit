import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CreateComponent } from "./create/create.component";
import { EditComponent } from "./edit/edit.component";

@NgModule({
  exports: [
    CreateComponent,
    EditComponent
  ],
  declarations: [
    CreateComponent,
    EditComponent
  ],
  imports: [
    RouterModule
  ]
})
export class EditorModule {}
