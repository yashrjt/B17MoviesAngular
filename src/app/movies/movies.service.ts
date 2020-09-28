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
   
   return this.http.get("http://localhost:8080/api/movies/getAllMovies",
                              {headers: new HttpHeaders({'Content-Type':  'application/json'})})
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


  getMovieById(movieid){
    return this.http.get(`http://localhost:8080/api/movies/getMovie/${movieid}`,
                              {headers: new HttpHeaders({'Content-Type':  'application/json'})})
    .pipe(
      map((res)=>{
     
        return res;
      }),
      catchError((err)=>{
          throw err;
      })
    )
  }


  createMovies(movie){
   
    return this.http.post("http://localhost:8080/api/movies/createMovie",movie,
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

  updateMovies(movieid,moviebody){
    return this.http.patch(`http://localhost:8080/api/movies/updateMovie/${movieid}`,moviebody,
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


  deleteMovies(){
    



  }



  searchMovie(){

  }

}