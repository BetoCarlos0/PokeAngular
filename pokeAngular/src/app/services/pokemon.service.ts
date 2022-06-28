import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

import { Pokemon } from '../models/pokemon.model';
import { listPokemon } from '../models/listPokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = this.baseApiUrl + "pokemon/";

  constructor(private http: HttpClient) { }

  getPokemons(offset: number, limit: number): Observable<listPokemon>{
    const url = `${this.apiUrl}?offset=${offset}&limit=${limit}`;

    return this.http.get<listPokemon>(url);
  }
  getAllPokemons(): Observable<listPokemon>{
    const url = `${this.apiUrl}?offset=0&limit=1154`;

    return this.http.get<listPokemon>(url);
  }
}
