import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { ApiService } from "../api/api.service";
import { Tags } from "./tags";

@Injectable()
export class TagsService {
  constructor(private apiService: ApiService) {}

  getTags(): Observable<string[]> {
    return this.apiService.get<Tags>('/tags').pipe(
      map((response: Tags) => response.tags.filter((tag: string) => {
        return tag !== '';
      }))
    );
  }
}
