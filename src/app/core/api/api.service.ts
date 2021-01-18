import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from './../../../environments/environment'

@Injectable()
export class ApiService {
  private apiUrl: string = environment.apiUrl;

  constructor(private httpClient: HttpClient) {}

  get<T>(endpoint: string) {
    return this.httpClient.get<T>(this.apiUrl + endpoint);
  }
}
