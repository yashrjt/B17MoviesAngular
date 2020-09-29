import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {


  moviesList:Array<any>;

  constructor(private movies:MoviesService) { }

  ngOnInit() {
   this.getAllMovies();
  }


  getAllMovies(){
    this.movies.getAllMovies().subscribe((res)=>{
      console.log("MoviesComponent -> ngOnInit -> res", res)
         this.moviesList=res['data']['result'];
      },(err)=>{
      console.log("MoviesComponent -> ngOnInit -> err", err)
        
      })
  }
  
  editMovie(movieid){
    this.movies.updateMovies(movieid,{}).subscribe((res)=>{
    console.log("MoviesComponent -> editMovie -> res", res)
      
    },
    (err)=>{
      console.log("MoviesComponent -> ngOnInit -> err", err)
        
      }
    )
  }


  deleteMovie(movieid){
    this.movies.deleteMovies(movieid).subscribe((res)=>{
      console.log("MoviesComponent -> deleteMovies -> res", res);
      this.getAllMovies();
    }),
    (err)=>{
      console.log("MoviesComponent -> deleteMovies -> err", err)
        
      }
  }
}
