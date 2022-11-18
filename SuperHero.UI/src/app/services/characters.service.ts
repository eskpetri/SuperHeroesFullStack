import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Character } from '../models/character';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  private url = 'Character';

  constructor(private http: HttpClient) {}

  public getCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(`${environment.apiUrl}/${this.url}`);
  }

  public createCharacter(Character: Character): Observable<Character[]> {
    return this.http.post<Character[]>(
      `${environment.apiUrl}/${this.url}`,
      Character
    );
  }

  public getCharacter(id: number): Observable<Character[]> {
    return this.http.get<Character[]>(`${environment.apiUrl}/${this.url}/${id}`);
  }

  public updateCharacter(Character: Character): Observable<Character[]> {
    return this.http.put<Character[]>(
      `${environment.apiUrl}/${this.url}/${Character.id}`,
      Character
    );
  }

  public deleteCharacter(Character: Character): Observable<Character[]> {
    return this.http.delete<Character[]>(
      `${environment.apiUrl}/${this.url}/${Character.id}`
    );
  }
}
