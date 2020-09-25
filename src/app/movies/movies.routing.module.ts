import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEditMovieComponent } from './create-edit-movie/create-edit-movie.component';
import { SearchMovieComponent } from './search-movie/search-movie.component';
import { MoviesComponent } from './movies/movies.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';


// localhost:4200/movies
// localhost:4200/movies/create-movie
// localhost:4200/movies/search-movie

const routes: Routes = [
  {path:'',component:MoviesComponent,
   children:[
    {path:'create-movie',component:CreateEditMovieComponent},
    {path:'search-movie',component:SearchMovieComponent},
  
  ]},
  {path:'moviedetail/:id',component:MoviedetailsComponent}
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }