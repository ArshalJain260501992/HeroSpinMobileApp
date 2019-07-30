import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }

  getCharacters(currentOffset): Observable<any> {
    return this.http.get<any>(environment.api.listAllHeroes + currentOffset);
  }

  pickRandomMovieByCharacter(character): Observable<any> {
    // mock call for now
    return this.http.get<any>(environment.api.getRandomMovieForHero + character.name);
  }
}
