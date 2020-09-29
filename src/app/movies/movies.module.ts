import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies/movies.component';
import { RouterModule } from '@angular/router';
import { CreateEditMovieComponent } from './create-edit-movie/create-edit-movie.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { SearchMovieComponent } from './search-movie/search-movie.component';
import {SearchResponseComponent}  from './search-response/search-response.component';

import {MoviesRoutingModule} from './movies.routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [MoviesComponent, CreateEditMovieComponent, MoviedetailsComponent, SearchMovieComponent,SearchResponseComponent],
  imports: [
    CommonModule,
    RouterModule,
    MoviesRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  exports:[MoviesComponent, CreateEditMovieComponent, MoviedetailsComponent, SearchMovieComponent,SearchResponseComponent]
})
export class MoviesModule { }
