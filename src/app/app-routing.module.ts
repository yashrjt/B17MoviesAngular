import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { MoviesComponent } from './movies/movies/movies.component';
import { LoginComponent } from './authentication/login/login.component';
import { SignupComponent } from './authentication/signup/signup.component';
import {AuthGuard}  from './authentication/auth.guard';

const routes: Routes = [
  {path:'home',component:HomeComponent},
 
  {path:'movies',canActivate:[AuthGuard],loadChildren: () => import('./movies/movies.module').then(m => m.MoviesModule)},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
