import { Component, OnInit } from '@angular/core';
import { Films } from '../interfaces';
import { ApiDataService } from '../api-data.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  films: Films[] = [];

  getFilms(): void {
    this.dataService
      .getFilms()
      .subscribe((data) => (this.films = data.results));
  }

  buttonHanlde(): void {
    console.log(this.films);
  }

  constructor(private dataService: ApiDataService) {}

  ngOnInit(): void {
    this.getFilms();
  }
  title = 'Star Wars Films';
}
