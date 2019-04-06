import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError as observableThrowError, Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { Photo, Post } from './model';
@Injectable({
  providedIn: 'root'
})
export class MainService {
  private baseUrl = environment.fakeapi;

  constructor(
    private http: HttpClient
  ) {
  }

  getPopularPosts(): Observable<Array<Post>> {
    return this.http.get<Array<Post>>(this.baseUrl + 'posts').pipe(
      catchError(this.errorHandler)
    );
  }

  insertPost(post: Post): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'posts', post).pipe(
      catchError(this.errorHandler)
    );
  }

  updatePost(post: Post): Observable<any> {
    return this.http.put<any>(this.baseUrl + 'posts/' + post.id, post).pipe(
      catchError(this.errorHandler)
    );
  }


  private errorHandler(error: HttpErrorResponse) {
    return observableThrowError(error || 'Server Error');
  }
}
