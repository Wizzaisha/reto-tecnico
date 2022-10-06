import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { FilmDetailsComponent } from './film-details/film-details.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'films', component: MainPageComponent },
  { path: 'films/detail/:id', component: FilmDetailsComponent },
  { path: 'character/:charId', component: CharacterDetailsComponent },
  { path: '', redirectTo: '/films', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
