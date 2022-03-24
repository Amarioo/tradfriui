import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TradfriService {
  baseURL = environment.baseUrl + 'device';
  constructor(private http: HttpClient) {
  }

  setBrightness(brightness: number): Observable<{}> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
    return this.http.post<{}>(this.baseURL + '/golvlampa/brightness/' + brightness, { headers });
  }

  turnOn(): Observable<{}> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
    return this.http.post<{}>(this.baseURL + '/golvlampa/on', { headers });
  }

  changeColour(colour: number): Observable<{}> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
    return this.http.post<{}>(this.baseURL + '/golvlampa/colour/' + colour, { headers });
  }

  turnOff(): Observable<{}> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
    return this.http.post<{}>(this.baseURL + '/golvlampa/off', { headers });
  }

  status(): Observable<boolean> {
    const headers = { accept: 'application/json' };
    return this.http.get<boolean>(this.baseURL + '/golvlampa/status', { headers });
  }

  colour(): Observable<number> {
    const headers = { accept: 'application/json' };
    return this.http.get<number>(this.baseURL + '/golvlampa/colour', { headers });
  }

  getGolvlampa(): Observable<any> {
    const headers = { accept: 'application/json' };
    return this.http.get<any>(this.baseURL + '/golvlampa', { headers });
  }
}
