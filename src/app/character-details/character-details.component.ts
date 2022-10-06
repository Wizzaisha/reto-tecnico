import { Component, OnInit } from '@angular/core';
import { ApiDataService } from '../api-data.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { CharacterDetails, Starships } from '../interfaces';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css'],
})
export class CharacterDetailsComponent implements OnInit {
  character?: CharacterDetails;

  starShips: any = [];

  getCharacterDetails() {
    const id = Number(this.route.snapshot.paramMap.get('charId'));

    this.dataService.getCharacterDetails(id).subscribe((response) => {
      this.character = {
        url: response.url,
        name: response.name,
        birth_year: response.birth_year,
        gender: response.gender,
        height: response.height,
        mass: response.mass,
        starships: response.starships,
      };

      this.getStarShipts(response.starships);
    });
  }

  getStarShipts(starships: Starships[]): void {
    starships.map((e) => {
      this.dataService.getStarShips(e).subscribe((response: Starships) => {
        this.starShips?.push({
          name: response.name,
          model: response.model,
          starship_class: response.starship_class,
          passengers: response.passengers,
        });
      });
    });
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
    this.getCharacterDetails();
  }
}
