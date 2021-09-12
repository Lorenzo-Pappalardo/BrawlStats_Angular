import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StatsService {
  constructor(private http: HttpClient) {}

  fetchData(tag: string): Observable<any> {
    return this.http.get(`http://localhost:3000/players/${tag}`);
  }
}
