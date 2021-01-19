import { Component, Input } from "@angular/core";
import { Profile } from "../../model/profile";

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html'
})
export class UserInfoComponent {
  @Input() profile: Profile | null = null;
}
