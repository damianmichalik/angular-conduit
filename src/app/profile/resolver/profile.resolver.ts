import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { ApiService } from "src/app/core/api/api.service";
import { Profile, ProfileResponse } from "../model/profile";

@Injectable()
export class ProfileResolver implements Resolve<Profile> {
  constructor(private apiService: ApiService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):  Observable<Profile> {
    let username: string | null = route.paramMap.get('username');
    username = 'dades';

    return this.apiService.get<ProfileResponse>(`/profiles/${username}`).pipe(
      map((response: ProfileResponse) => response.profile)
    );
  }
}
