import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEditMovieComponent } from './create-edit-movie/create-edit-movie.component';
import { SearchMovieComponent } from './search-movie/search-movie.component';
import { MoviesComponent } from './movies/movies.component';



const routes: Routes = [
  {path:'',component:MoviesComponent,
   children:[
    {path:'create-movie',component:CreateEditMovieComponent},
    {path:'search-movie',component:SearchMovieComponent}
  ]}
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }