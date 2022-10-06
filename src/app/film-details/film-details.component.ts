import { Component, OnInit } from '@angular/core';
import { ApiDataService } from '../api-data.service';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FilmsDetails, Character } from '../interfaces';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css'],
})
export class FilmDetailsComponent implements OnInit {
  filmDetails?: FilmsDetails;
  characters: any = [];

  getFilm(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.dataService.getFilm(id).subscribe((film) => {
      this.filmDetails = {
        title: film.title,
        release_date: film.release_date,
        director: film.director,
        producer: film.producer,
        opening_crawl: film.opening_crawl,
        characters: film.characters,
      };

      this.getCharacters(film.characters);
    });
  }

  getCharacters(characters: Character[]): void {
    characters.map((e) =>
      this.dataService.getCharacter(e).subscribe((response: Character) =>
        this.characters?.push({
          id: Number(
            response.url.slice(29, response.url.length).replace('/', '')
          ),
          name: response.name,
          birth_year: response.birth_year,
          gender: response.gender,
          mass: response.mass,
          height: response.height,
        })
      )
    );
  }

  goBack(): void {
    this.location.back();
  }

  constructor(
    private dataService: ApiDataService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getFilm();
  }
}
