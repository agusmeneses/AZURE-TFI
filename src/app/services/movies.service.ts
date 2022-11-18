import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { IMovieUser } from "../interfaces/movies.interfaces";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AngularFireStorage } from "@angular/fire/compat/storage";
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
    providedIn: "root"
})

export class MoviesService {
    private baseUrl: string = "https://api.themoviedb.org/3";
    private baseUrl2: string = "https://amdatalakeam.dfs.core.windows.net";
    private api_key: string = "1e9b089073960d4215fa0d2ebe24f999";
    private api_key2: string = "f7hxmNwz9JqDRSosNWmjYpAiL9FEeaquQ+6sTGYQFT2eG2M7CMCIAIRCBOp2U37Nnp1lrg0mXqdW+ASt8IW1zw==";

    public getMovieSerie(uid: string,type: string){
        if (type=='tv')
            { return this.firestore.collection('usuarios').doc(uid).collection('tv').get()
           
        ;}

        else  
        { return this.firestore.collection('usuarios').doc(uid).collection('movie').get()
        ;}
    };

    

    public deleteMovieSerie(uid: string, id: string, type: string){
        if (type=='tv')
            {return this.firestore.collection('usuarios').doc(uid).collection('tv')
            .doc(id).delete().finally(() => console.log('borrado el id: ', id));}
        else  
            {return this.firestore.collection('usuarios').doc(uid).collection('movie')
            .doc(id).delete().finally(() => console.log('borrado el id: ', id));}
    };


    public addMovieSerie(uid: string,value: IMovieUser[], type: string){
        if (type=='tv')
            { return this.firestore.collection('usuarios').doc(uid).collection('tv').add(value)
            ;}
        else  
        {     return this.firestore.collection('usuarios').doc(uid).collection('movie').add(value); }
    };

    constructor (private _http: HttpClient, private firestore: AngularFirestore) {}

    getTrending(page:number) : Observable<any[]>{
        let params= new HttpParams().set('api_key',this.api_key);
        return this._http.get<any[]>(`${this.baseUrl}/trending/all/week?language=es&page=${page}`, {params: params});
    };

    getMovies(page:number): Observable<any[]>{
        let params= new HttpParams().set('api_key',this.api_key);
        return this._http.get<any[]>(`${this.baseUrl}/movie/popular?language=es&page=${page}`, {params: params});
    };

    getSeries(page:number): Observable<any[]>{
        let params= new HttpParams().set('api_key',this.api_key);
        return this._http.get<any[]>(`${this.baseUrl}/tv/popular?language=es&page=${page}`, {params: params});
    };

    gettvdetail(tv_id:string): Observable<any[]>{
        let params= new HttpParams().set('api_key',this.api_key);
        return this._http.get<any[]>(`${this.baseUrl}/tv/${tv_id}?/language=es`, {params: params});
    };
    getmoviedetail(tv_id:string): Observable<any[]>{
        let params= new HttpParams().set('api_key',this.api_key);
        return this._http.get<any[]>(`${this.baseUrl}/movie/${tv_id}?/language=es`, {params: params});
    };

    pruebagetproductos(): Observable<any[]>{
        let params= new HttpParams().set('api_key',this.api_key2);
        return this._http.get<any[]>(`https://amdatalakeam.blob.core.windows.net/outputcontainer/categoria.csv`, {params: params});
    };


    getFromFirestore(
        userId: string,
        mediaType: string
      ): Observable<any> {
        return this.firestore
          .collection('usuarios')
          .doc(`${userId}`)
          .collection(`${mediaType}`)
          .snapshotChanges();
      }


    


}