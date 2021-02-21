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
  
  
  //Get comments from jsonplaceholde
  getComments(postID): Observable<any> {
    return this.http.get<any>(`${this.URI}/${postID}/comments`);
  }
  //Get posts from jsonplaceholde
  getPosts(): Observable<any> {
    return this.http.get<any>(`${this.URI}`)
  }
  
  /*
  I dont use the following functions because the routes provided by jsonplaceholder dont include the
  methods post and delete to add, update and delete the comments. For this reason i do another functions
  in the comments component that save and delete the comments in an array
  */
  updateComment() {}
  setComment() {}
  deleteComment() {}
  
  
}
