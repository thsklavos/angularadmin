import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError as observableThrowError, Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { Flag} from './model';
@Injectable({
  providedIn: 'root'
})
export class MainService {
  private baseUrl = environment.flagapi;

  constructor(
    private http: HttpClient
  ) {
  }


  getFlags(): Observable<Array<Flag>> {
    return this.http.get<Array<Flag>>(this.baseUrl+'region/europe' ).pipe(
      catchError(this.errorHandler)
    );
  }

  private errorHandler(error: HttpErrorResponse) {
    return observableThrowError(error || 'Server Error');
  }
}
