import { Component, OnInit } from '@angular/core';

//Aca importamos
import moviesMock from "../../../mocks/movies.mock.json"
 
import { IMovie } from 'src/app/interfaces/movies.interfaces';
 
import { Pipe, PipeTransform } from '@angular/core';

import { MoviesService } from 'src/app/services/movies.service';
 
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
 
export class InicioComponent implements OnInit {
 
  //Exportar (con esto le decimes que la variable movies va a tener un arreglo de peliculas y se inicializa en cero)
 
  movieSeriesOrigRow: IMovie[]=[];
  movieSeriesRow: IMovie[]=[];
  movieSeriesRow2: IMovie[]=[];
  toSearch: string="";
  filter: string="";
  actual: string="";
  cant: number=0;

  //Url para obtener imagenes
  urlImage: string= 'https://image.tmdb.org/t/p/w500';
  
  constructor(public _moviesService: MoviesService) { }
 
  ngOnInit(): void {
 
    this.filter="Todos"
    this.actual="Todos"

    this._moviesService.getTrending(1).subscribe(
      (response: any) => {
        console.log("Success",response);

        this.movieSeriesOrigRow = response.results
        this.movieSeriesRow = response.results
        this.cant=this.movieSeriesRow.length
      },
      error => {
        console.log("Error",error);
      }
    )

    this._moviesService.pruebagetproductos().subscribe(
      (response: any) => {
        console.log("Success",response);
      },
      error => {
        console.log("Error",error); })
      
    }

  search(arg:any){
    this.movieSeriesRow = this.movieSeriesOrigRow.filter((obj) => {
      if (obj.title?.toLowerCase().includes(this.toSearch.toLowerCase())){
        return obj.title?.toLowerCase().includes(this.toSearch.toLowerCase());
      }
      else{
        return obj.name?.toLowerCase().includes(this.toSearch.toLowerCase());
      };       
    });

    this.cant = this.movieSeriesRow.filter((obj) => {
      if (obj.title?.toLowerCase().includes(this.toSearch.toLowerCase())){
        return obj.title?.toLowerCase().includes(this.toSearch.toLowerCase());
      }
      else{
        return obj.name?.toLowerCase().includes(this.toSearch.toLowerCase());
      };       
    }).length;
  }

  all(arg:any){
    this.filter = "Todos"
    this.actual="Todos"
    this._moviesService.getTrending(1).subscribe(
      (response: any) => {
        console.log("Success",response);

        this.movieSeriesOrigRow = response.results
        this.movieSeriesRow = response.results
        this.cant=this.movieSeriesRow.length
      },
      error => {
        console.log("Error",error);
      }
    )
  }

  movies(arg:any){
    this.filter = "movie"
    this.actual="Peliculas"
    this._moviesService.getMovies(1).subscribe(
      (response: any) => {
        console.log("Success movies",response);
        this.movieSeriesOrigRow = response.results
        this.movieSeriesRow = response.results
        this.cant=this.movieSeriesRow.length
      }  
    )
  }
  series(arg:any){
    this.filter="tv"
    this.actual="Series"
    this._moviesService.getSeries(1).subscribe(
      (response: any) => {
        console.log("Success series",response);
        this.movieSeriesOrigRow = response.results
        this.movieSeriesRow = response.results
      }
    )
  }
 
}
