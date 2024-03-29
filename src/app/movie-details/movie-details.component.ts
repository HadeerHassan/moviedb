import { MoviesService } from './../movies.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
   movieId:any;
   movieDetails:any;
   imgPrefix:string="https://image.tmdb.org/t/p/w500";
  constructor(private _ActivatedRoute:ActivatedRoute,private _MoviesService:MoviesService) { 
   this.movieId= _ActivatedRoute.snapshot.params.id;
    this._MoviesService.getMovieDetails(this.movieId).subscribe((response)=>{this.movieDetails=response})
  }

  ngOnInit(): void {
  }

}
