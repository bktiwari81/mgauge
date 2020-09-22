import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(public http: HttpClient) { }

  getTeamFlaggingData(): Observable<any> {
    let headers = new HttpHeaders();
    headers.set('Access-Control-Allow-Origin', '*');
    return this.http.get('http://localhost:5600/employeeEngagement/v1/teamFlagging');
  }
}
