import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {Note} from '../model/note.model';
import {environment} from '../../../environments/environment';
import {SubmittedData} from '../model/submitted-data.model';
import {ChartData, Point} from '../model/chart-data.model';

@Injectable({
  providedIn: 'root'
})
export class HomePageService {
  submitted$: Subject<SubmittedData> = new Subject<any>();
  created$: Subject<boolean> = new Subject<boolean>();
  delete$: Subject<number> = new Subject<number>();
  chartDataSub$: Subject<Point[]> = new Subject<[]>();

  constructor(
    private http: HttpClient
  ) {
  }

  /**
   * Get notes
   */
  getNotes(reqParams): Observable<Note[]> {
    return this.http.get<Note[]>(`${environment.apiUrl}/notes`, {
      params: reqParams
    });
  }

  /**
   * Get note chart data
   */
  getNoteChartData(reqParams): Observable<Point[]> {
    return this.http.get<Point[]>(`${environment.apiUrl}/notes/chart`, {
      params: reqParams
    });
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
