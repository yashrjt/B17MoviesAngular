import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  catchError,
  map
} from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  
  constructor(private http:HttpClient) { }

  getAllMovies(){
    let token=localStorage.getItem('token');
   return this.http.get("http://localhost:8080/api/movies/getAllMovies",
                              {headers: new HttpHeaders({'Content-Type':  'application/json','x-access-token':token})})
    .pipe(
      map((res)=>{
      console.log("MoviesService -> getAllMovies -> res", res)
        return res;
      }),
      catchError((err)=>{
          throw err;
      })
    )
  }


  getMovieById(){
    
  }


  createMovies(){
   
    return this.http.post("http://localhost:8080/api/movies/getAllMovies",
                               {headers: new HttpHeaders({'Content-Type':  'application/json'})})
     .pipe(
       map((res)=>{
      //  console.log("MoviesService -> getAllMovies -> res", res)
         return res;
       }),
       catchError((err)=>{
           throw err;
       })
     )
  }

  updateMovies(){

  }


  deleteMovies(){
    



  }



  searchMovie(){

  }

}