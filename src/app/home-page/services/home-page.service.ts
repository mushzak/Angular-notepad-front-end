import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {Note} from '../model/note.model';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomePageService {
  submitted$: Subject<{ type: string; body: Note }> = new Subject<any>();
  created$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private http: HttpClient
  ) {
  }

  /**
   * Get notes
   */
  getNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(`${environment.apiUrl}/notes`);
  }
  /**
   * Create notes
   */
  createNote(body): Observable<boolean>{
    return this.http.post<boolean>(`${environment.apiUrl}/notes`, body);
  }

}
