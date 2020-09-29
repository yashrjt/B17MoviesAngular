import { Component, OnInit,NgZone } from '@angular/core';
import { MoviesService } from '../movies.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Observable, of } from "rxjs";

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent implements OnInit {

  searchForm:FormGroup

  searchResponse=[];

  constructor(private fb:FormBuilder,private movies:MoviesService,private zone:NgZone){}
    
  ngOnInit(){
    this.searchForm=this.fb.group({
      searchControl:['']
    })
    
    
    this.searchFilms();
    
    
  }

  searchFilms(){


  this.searchForm.get('searchControl').valueChanges
    .pipe(
      debounceTime(1000)
    )
    .subscribe((query)=>{
    //console.log("SearchMovieComponent -> ngOnInit -> query", query)
  
    this.movies.searchMovie(query).subscribe((res)=>{
    // console.log("SearchMovieComponent -> ngOnInit -> res", res)
    this.zone.run(() => { // <== added
      this.searchResponse.splice(0);
      this.searchResponse=res['data'];
      console.log("SearchMovieComponent -> ngOnInit ->  this.searchResponse",  this.searchResponse)
    
    });
      
     
    },
    (err)=>{
    console.log("SearchMovieComponent -> ngOnInit -> err", err)
      
    })
    });

  }

}
