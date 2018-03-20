import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OktaAuthService } from '@okta/okta-angular/dist/okta/okta.service';

@Injectable()
export class JoggingServiceService {
  private headers: HttpHeaders;

  constructor(private http: HttpClient, private oktaAuth: OktaAuthService) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
  }

  public get() {
    // Get all jogging data
    return this.http.get('http://localhost:62542/api/workouts', {headers: this.headers});
  }

  public add(payload) {
    return this.http.post('http://localhost:62542/api/workouts', payload, {headers: this.headers});
  }

  public remove(payload) {
    return this.http.delete('http://localhost:62542/api/workouts/' + payload.id, {headers: this.headers});
  }

  public update(payload) {
    return this.http.put('http://localhost:62542/api/workouts/' + payload.id, payload, {headers: this.headers});
  }
}
