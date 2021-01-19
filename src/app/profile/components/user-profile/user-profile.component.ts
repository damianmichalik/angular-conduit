import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { EMPTY, Observable } from "rxjs";
import { Profile } from "../../model/profile";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html'
})
export class UserProfileComponent implements OnInit {
  profile: Profile | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.profile = this.route.snapshot.data['profile'];
  }


}
