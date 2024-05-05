import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from '../post';
import { Subscription } from 'rxjs';
import { PostService } from '../post.service';

@Component({
  selector: 'app-http-request',
  templateUrl: './http-request.component.html',
  styleUrls: ['./http-request.component.scss'],
})
export class HttpRequestComponent implements OnInit {
  @ViewChild('postForm') postForm!:NgForm
  loadedPosts: Post[] = [];
  isFetching = false;
  error = null;
  private errorSub!: Subscription;

  constructor(private http: HttpClient, private postsService: PostService) {}

  ngOnInit(): void {
    this.postsService.error.subscribe((error: any)=>
      this.error = error
      )
    this.onFetchPosts();
  }
  onClearPosts() {
  this.postsService.deletePost().subscribe(()=>
  this.loadedPosts=[])
  }
  onCreatePost(postData: Post) {
    this.postsService.createnpost(postData.title, postData.content)
    this.isFetching=true;
    this.postForm.reset();
    setTimeout(()=>this.onFetchPosts(), 1500)
  }
  onFetchPosts(){
    this.isFetching=true;
    this.postsService.fetchpost().subscribe(
      (posts)=> {
       console.log(posts, 'posts')
       this.isFetching = false;
       this.loadedPosts=posts
      },
      err=>
      this.error=err.message
    )
  }

  onHandleError() {
    this.error = null;
  }
}
