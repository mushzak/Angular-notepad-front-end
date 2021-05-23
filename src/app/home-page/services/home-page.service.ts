import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {Note} from '../model/note.model';
import {environment} from '../../../environments/environment';
import {SubmittedData} from '../model/submitted-data.model';

@Injectable({
  providedIn: 'root'
})
export class HomePageService {
  submitted$: Subject<SubmittedData> = new Subject<any>();
  created$: Subject<boolean> = new Subject<boolean>();
  delete$: Subject<number> = new Subject<number>();

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
  createNote(body): Observable<boolean> {
    return this.http.post<boolean>(`${environment.apiUrl}/notes`, body);
  }

  /**
   * Update notes
   */
  updateNote(body, id): Observable<boolean> {
    return this.http.put<boolean>(`${environment.apiUrl}/notes/${id}`, body);
  }

  /**
   * Delete notes
   */
  deleteNote(id): Observable<number> {
    return this.http.delete<number>(`${environment.apiUrl}/notes/${id}`);
  }

}
