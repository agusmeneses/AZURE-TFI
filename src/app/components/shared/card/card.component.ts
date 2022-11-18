import { Component,Input, OnInit } from '@angular/core';

//Aca importamos
import moviesMock from "../../../mocks/movies.mock.json"
 
import { IMovie } from 'src/app/interfaces/movies.interfaces';
 
import { Pipe, PipeTransform } from '@angular/core';

import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  urlImage: string= 'https://image.tmdb.org/t/p/w500';
  @Input() filter: string | undefined;
  @Input() movieSeriesRow: any | undefined
  id: string=''
    
  constructor(public _moviesService: MoviesService) { }
 
  ngOnInit(): void {
    
  }

  detail(movie:any){
    this.id=movie.id
    if (movie.name){
      console.log("Es tv")
        window.location.href="/tvdetail/"+movie.id;
        
      } else{
      console.log("Es movie")
        window.location.href="/moviedetail/"+movie.id;
        
      }
    }
  }


