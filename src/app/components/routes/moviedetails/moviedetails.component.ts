import { Component,Input, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';
import { ITvdetail } from 'src/app/interfaces/tvdetail.iterfaces';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css']
})
export class MoviedetailsComponent implements OnInit {
  
  movie: any | ITvdetail[]=[];
  id: string='';
  urlImage: string= 'https://image.tmdb.org/t/p/w500';
  genre: string =''


  constructor(private route: ActivatedRoute, public _moviesService: MoviesService) { }

  ngOnInit(): void {
    
    console.log(this.route.snapshot.params.id);
    this.id=this.route.snapshot.params.id;
    
    this._moviesService.getmoviedetail(this.id).subscribe((response: any) => {
      console.log("Success",response);
      this.movie=response
      this.genre=this.movie.genres[0].name
    },
    error => {
      console.log("ERROR")
    }
    )
  }

  

}
