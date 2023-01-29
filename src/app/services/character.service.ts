import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, retry, tap } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Character } from '../models/character.model';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {


  constructor(private http: HttpClient) { }

  getAllCharacters(limit:string){

    return this.http.get<Character>(environment.baseUrlAPI+"&limit="+limit)
    .pipe(
      retry(2),
      tap(response => response.data.results),
      map(response => response.data.results.map(item => {
        return {
          ...item
        }
      }))
    )
  }
}
