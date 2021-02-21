import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  URI: string;
  
  constructor(private http: HttpClient) {
    this.URI="https://jsonplaceholder.typicode.com/posts"
  }
  
  setComment() {}
  
  getComments(postID): Observable<any> {
    return this.http.get<any>(`${this.URI}/${postID}/comments`);
  }

  updateComment() {}

  deleteComment() {}
  
  getPosts(): Observable<any> {
    return this.http.get<any>(`${this.URI}`)
  }
  
}
