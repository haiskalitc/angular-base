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
  public abstract httpOptions = {};

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

  public post<T>(body: T): Observable<T> {
    //httpOption
    return this.http
      .post<T>(this.URL, JSON.stringify(body), this.httpOptions)
      .pipe(retry(reSend), catchError(this.handleError));
  }

  public put<T>(body: T): Observable<T> {
    // httpOption
    return this.http
      .put<T>(this.URL, JSON.stringify(body), this.httpOptions)
      .pipe(retry(reSend), catchError(this.handleError));
  }

  public delete<T>(): Observable<T> {
    // httpOption
    return this.http
      .delete<T>(this.URL, this.httpOptions)
      .pipe(retry(reSend), catchError(this.handleError));
  }

  // Error handling
  handleError<T>(error: T) {
    console.log(error);
    return throwError(error);
  }
}