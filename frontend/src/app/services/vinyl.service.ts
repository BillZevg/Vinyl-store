import { Injectable, inject } from '@angular/core';
// import { sample_vinyls } from '../data';
import { Vinyl } from '../shared/models/Vinyl';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  VINYLS_BY_SEARCH_URL,
  VINYLS_URL,
  VINYL_BY_ID_URL,
} from '../shared/constants/urls';

@Injectable({
  providedIn: 'root',
})
export class VinylService {
  constructor(private http: HttpClient = inject(HttpClient)) {}

  getAll(): Observable<Vinyl[]> {
    return this.http.get<Vinyl[]>(VINYLS_URL);
  }

  getAllVinylsBySearchTerm(searchTerm: string) {
    return this.http.get<Vinyl[]>(VINYLS_BY_SEARCH_URL + searchTerm);
  }

  getVinylById(vinylId: string): Observable<Vinyl> {
    return this.http.get<Vinyl>(VINYL_BY_ID_URL + vinylId);
  }
}
