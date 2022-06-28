import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

import { Pokemon } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = this.baseApiUrl + "pokemon";

  constructor(private http: HttpClient) { }

  getPokemons(offset: number, limit: number): Observable<Pokemon>{
    const url = `${this.apiUrl}?offset=${offset}&limit=${limit}`;
    
    return this.http.get<Pokemon>(url);
  }
}
