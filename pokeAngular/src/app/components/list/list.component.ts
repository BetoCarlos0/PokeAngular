import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { environment } from 'src/environments/environment.prod';

import { listPokemon } from 'src/app/models/listPokemon.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  offset: number = 0;
  limit: number = 34;
  listPokemons!: listPokemon;
  searchPokemons!: listPokemon;

  //baseApiUrl = environment.baseApiUrl;

  constructor(private pokemonService:PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.getPokemons(this.offset, this.limit).subscribe((items) => {
      const data = items;

      this.listPokemons = items;
      this.searchPokemons = items;
    });
  }

  search(event: any): void{
    const target = event.target as HTMLInputElement
    const value = target.value

    this.searchPokemons.results = this.listPokemons.results.filter(pokemon => {
      return pokemon.name.toLowerCase().includes(value);
    });
  }
}
