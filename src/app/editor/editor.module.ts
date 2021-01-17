import { NgModule } from "@angular/core";
import { CreateComponent } from "./create/create.component";
import { EditComponent } from "./edit/edit.component";
import { EditorRoutingModule } from "./editor-routing.module";

@NgModule({
  declarations: [
    CreateComponent,
    EditComponent
  ],
  imports: [
    EditorRoutingModule
  ]
})
export class EditorModule {}
