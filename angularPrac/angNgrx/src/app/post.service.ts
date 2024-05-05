import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './post';
import { Subject, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  error = new Subject<string>();
  constructor(private http: HttpClient) {}

  createnpost(title: string, content: string) {
    const postData: Post = { title: title, content: content };
    this.http
      .post(
        'https://ng-backend-4d51c-default-rtdb.firebaseio.com/posts.json',
        postData,{
          observe: 'response'
        }
      )
      .subscribe(
        (responseData) => console.log(responseData),
        (err) => this.error.next(err.message)
      );
  }
  fetchpost() {
    let searchParams = new HttpParams();
    searchParams = searchParams.append('print', 'pretty');
    searchParams = searchParams.append('custom', 'key');
    return this.http
      .get('https://ng-backend-4d51c-default-rtdb.firebaseio.com/posts.json',{
        headers: new HttpHeaders({'custom-header':'hello'}),
        params: searchParams
      })
      .pipe(
        map((responseData: any) => {
          const postsArray: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key });
            }
          }
          return postsArray;
        }),
        catchError(err=> throwError(err))
      );
  }
  deletePost() {
    return this.http.delete(
      'https://ng-backend-4d51c-default-rtdb.firebaseio.com/posts.json'
    );
  }
}
