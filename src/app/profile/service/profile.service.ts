import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { ApiService } from "src/app/core/api/api.service";
import { Profile, ProfileResponse } from "../model/profile";

@Injectable()
export class ProfileService {
  constructor(private apiService: ApiService) {}

  getProfile(username: string): Observable<Profile> {
    return this.apiService.get<ProfileResponse>(`/profiles/${username}`).pipe(
      map((response: ProfileResponse) => response.profile)
    );
  }
}
