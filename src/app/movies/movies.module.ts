import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies/movies.component';
import { RouterModule } from '@angular/router';
import { CreateEditMovieComponent } from './create-edit-movie/create-edit-movie.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { SearchMovieComponent } from './search-movie/search-movie.component';

import {MoviesRoutingModule} from './movies.routing.module';

@NgModule({
  declarations: [MoviesComponent, CreateEditMovieComponent, MoviedetailsComponent, SearchMovieComponent],
  imports: [
    CommonModule,
    RouterModule,
    MoviesRoutingModule
  ],
  exports:[MoviesComponent, CreateEditMovieComponent, MoviedetailsComponent, SearchMovieComponent]
})
export class MoviesModule { }
