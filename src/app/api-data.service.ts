import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {
  FilmsDetails,
  Character,
  CharacterDetails,
  Starships,
} from './interfaces';

@Injectable({
  providedIn: 'root',
})
export class ApiDataService {
  apiUrl = 'https://swapi.dev/api';

  getFilms() {
    const url = `${this.apiUrl}/films/`;

    const response = this.http.get<any>(url);

    return response;
  }

  getFilm(id: number): Observable<FilmsDetails> {
    const url = `${this.apiUrl}/films/${id}`;
    const response = this.http.get<FilmsDetails>(url);
    return response;
  }

  getCharacter(urlStr: any): Observable<Character> {
    const response = this.http.get<Character>(urlStr);
    return response;
  }

  getCharacterDetails(id: number): Observable<CharacterDetails> {
    const url = `${this.apiUrl}/people/${id}`;
    const response = this.http.get<CharacterDetails>(url);
    return response;
  }

  getStarShips(urlStr: any): Observable<Starships> {
    const response = this.http.get<Starships>(urlStr);
    return response;
  }

  constructor(private http: HttpClient) {}
}
