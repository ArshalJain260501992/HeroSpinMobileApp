import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Movie } from '../model/movie.model';
import { environment } from 'src/environments/environment.prod';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getMovies(pageNo): Observable<any> {
    return this.http.get<any>(environment.api.listAllSuperheroMovies + pageNo);
  }

  getMovieDetail(movieID): Observable<any> {
    return this.http.get<any>(environment.api.getMovieDetails + movieID);
  }

  getRandomMovie(): Observable<any> {
    return this.http.get<any>(environment.api.getRandomMovie);
  }
}

