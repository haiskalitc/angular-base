import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const baseUrl = environment.URL;

@Injectable({
  providedIn: 'root'
})
export abstract class BaseService {
  public abstract URL: string;
  constructor() { }
}