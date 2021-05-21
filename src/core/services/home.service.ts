import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class HomeService extends BaseService {
  public URL: string =
    'https://api-betting.brickmate.kr/api/v2/analyze?matchId=1234';

  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(public http: HttpClient) {
    super(http);
  }

  public getDataTest(): Observable<any> {
    return this.get<any>();
  }
}
