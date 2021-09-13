import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Error, Player } from '../types';

@Injectable({
  providedIn: 'root',
})
export class StatsService {
  constructor(private http: HttpClient) {}

  fetchData(tag: string): Observable<Player | Error> {
    return this.http.get(`http://localhost:3000/players/${tag}`) as Observable<
      Player | Error
    >;
  }
}
