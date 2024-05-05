import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PostModel } from './post-model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  url="https://jsonplaceholder.typicode.com/posts";
  constructor(private http:HttpClient) { 
  }
  getData(){
    return this.http.get<PostModel[]>(this.url)
  }
  postData(){
    const headers=new HttpHeaders()
    return this.http.post(this.url, {headers})
  }
}
