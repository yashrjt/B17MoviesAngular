import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {FormBuilder, FormGroup}  from '@angular/forms';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-create-edit-movie',
  templateUrl: './create-edit-movie.component.html',
  styleUrls: ['./create-edit-movie.component.css']
})
export class CreateEditMovieComponent implements OnInit {


  movieForm:FormGroup;
  movie;
  constructor(private route:ActivatedRoute,private form:FormBuilder,
              private movies:MoviesService,private router:Router) { }

  ngOnInit() {

      

    this.movieForm=this.form.group({
      movieid: '',
      director: '',
      description: '',
      imageurl: '',
      mpaa: '',
      releaseDate: '',
      title:'',
      price: '',
      starRating: '',
      approvalRating: '',
      category: '',
      tags: ''
    })

    console.log(this.route.snapshot.routeConfig.path);

    if(this.route.snapshot.routeConfig.path==='edit-movie/:id'){
    this.movies.getMovieById(this.route.snapshot.params.id).subscribe((res)=>{
   
      this.movie=res['data'];
     
      this.movieForm=this.form.group({
        movieid: this.movie.movieid,
        director: this.movie.director,
        description: this.movie.description,
        imageurl:  this.movie.imageurl,
        mpaa: this.movie.mpaa,
        releaseDate: this.movie.releaseDate,
        title:this.movie.title,
        price: this.movie.price,
        starRating: this.movie.starRating,
        approvalRating: this.movie.approvalRating,
        category: this.movie.category
       
      })
     
    },(err)=>{
    console.log("MoviesComponent -> ngOnInit -> err", err)
      
    })
  }
  
  }


  movieSubmit(){
      console.log(this.movieForm.value);

      if(this.route.snapshot.routeConfig.path==='create-movie'){
          this.movies.createMovies(this.movieForm.value).subscribe((res)=>{
            alert('Movie craeted successfully');
           
          })
      }
      else{
        this.movies.updateMovies(this.route.snapshot.params.id,this.movieForm.value).subscribe((res)=>{
          console.log("CreateEditMovieComponent -> movieSubmit -> res", res)
          alert('Movie Updated Successfully');
    
          })
      }
      this.router.navigate(['/movies']);
  }
}
