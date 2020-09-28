import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { RouterStateSnapshot, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css']
})
export class MoviedetailsComponent implements OnInit {

 
  moviesDetail={};

  constructor(private movies:MoviesService,private route:ActivatedRoute) { }

  ngOnInit() {
    //console.log(this.route.snapshot.params.id);
    this.movies.getMovieById(this.route.snapshot.params.id).subscribe((res)=>{
   
         this.moviesDetail=res['data'];
         console.log("MoviedetailsComponent -> ngOnInit ->  this.moviesDetail",  this.moviesDetail)
      },(err)=>{
      console.log("MoviesComponent -> ngOnInit -> err", err)
        
      })
  }

}
