import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../services/auth.service'
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  loggedUser: any
  User: any
  name: any
  userLocStg: any;
  userJSON: string | null = null;
  myMovies: any[] = [];
  cont_movies: number = 0;
  cont_series: number = 0;
  loaded: boolean = false;


  constructor(public authService: AuthService, public _moviesService: MoviesService) { }

  ngOnInit(): void {
    this.getLocalStorage();
    if (!this.userLocStg) {
      window.location.href="/ingresar/"
    }else{
      this.loggedUser=true
      this.User=this.userLocStg.user
    }

    this.getMyListserie(this.myMovies, 'tv');
    this.getMyListmovie(this.myMovies, 'movie');

    console.log("Cantidad de Sries: ",this.cont_series)
    console.log("Cantidad de pelis: ",this.cont_movies)
    
    
  }
  showUserData(){
    this.loggedUser= this.authService.getUserLogged().subscribe(
      response => {
        console.log('Registered | ',response);
      },
      error => {
        console.log(error);
      }
    )
  }
  logOut(){
    this.authService.logout()
    console.log("Logged out")
    window.location.href="/inicio/"
  }

  getLocalStorage() {
    this.userJSON = localStorage.getItem('Usuario');
    if (this.userJSON) {
      this.userLocStg = JSON.parse(this.userJSON);
      console.log("Local storage: ",this.userLocStg)
    }
  }

  getMyListmovie(array: any, mediaType: string) {
    this._moviesService
      .getFromFirestore(this.User.uid, mediaType)
      .subscribe(
        (resp) => {
          array = [];
          resp.forEach((element: any) => {
            array.push({
              idGlobal: element.payload.doc.id,
              ...element.payload.doc.data()
              
            });
          });
          console.log(array.length)
          return (this.cont_movies=array.length,
            this.loaded=true)


        },
        (error) => {
          console.log(error);
        }
      );
  }

  getMyListserie(array: any, mediaType: string) {
    this._moviesService
      .getFromFirestore(this.User.uid, mediaType)
      .subscribe(
        (resp) => {
          array = [];
          resp.forEach((element: any) => {
            array.push({
              idGlobal: element.payload.doc.id,
              ...element.payload.doc.data()
              
            });
          });
          console.log(array.length)
          return(this.cont_series=array.length)

        },
        (error) => {
          console.log(error);
        }
      );
  }

  Ir_a_pelis(){
    window.location.href="/mis-pelis/"
  }

  Ir_a_series(){
    window.location.href="/mis-series/"
  }

  

}
