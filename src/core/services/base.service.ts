import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

const reSend: number = 3;

@Injectable({
  providedIn: 'root',
})
export abstract class BaseService {
  public abstract URL: string;
  public abstract httpOptions: any;

  constructor(public http: HttpClient) {}

  public get<T>(): Observable<T> {
    return this.http
      .get<T>(this.URL)
      .pipe(retry(reSend), catchError(this.handleError));
  }

  public getById<T>(id: string): Observable<T> {
    return this.http
      .get<T>(this.URL)
      .pipe(retry(reSend), catchError(this.handleError));
  }

  public post<T>(body: T, httpOptions: T): Observable<T> {
    //httpOption
    return this.http
      .post<T>(this.URL, JSON.stringify(body), httpOptions)
      .pipe(retry(reSend), catchError(this.handleError));
  }

  public put<T>(body: T, httpOptions: T): Observable<T> {
    // httpOption
    return this.http
      .put<T>(this.URL, JSON.stringify(body), httpOptions)
      .pipe(retry(reSend), catchError(this.handleError));
  }

  public delete<T>(httpOptions: T): Observable<T> {
    // httpOption
    return this.http
      .delete<T>(this.URL, httpOptions)
      .pipe(retry(reSend), catchError(this.handleError));
  }

  // Error handling
  handleError<T>(error: T) {
    console.log(error);
    return throwError(error);
  }
}
