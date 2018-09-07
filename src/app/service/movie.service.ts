import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';


@Injectable()
export class MovieService {

  constructor(private http: Http) { }

  getListofStarwarMovies(): Observable<any> {
    return Observable.create(observer => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      this.http.get('https://swapi.co/api/films',
        {
          headers: headers
        })
        .subscribe(response => {
          let result = response.json();
          observer.next(result.results);
          observer.complete();
        }, (error: any) => {
          observer.error(error);
        })
    })
  }

  getMovieDetails(id): Observable<any> {
    return Observable.create(observer => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      this.http.get('https://swapi.co/api/films/'+id,
        {
          headers: headers
        })
        .subscribe(response => {
          let result = response.json();
          observer.next(result);
          observer.complete();
        }, (error: any) => {
          observer.error(error);
        })
    })
  }

}
