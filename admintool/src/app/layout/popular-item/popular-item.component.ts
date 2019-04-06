import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { Product, Photo, Post } from '../model';

@Component({
  selector: 'app-popular-item',
  templateUrl: './popular-item.component.html',
  styleUrls: ['./popular-item.component.css']
})
export class PopularItemComponent implements OnInit {
  posts: Array<Post> = [];
  photos: Array<Photo> = [];
  editPost: Post;
  constructor(
    private mainService: MainService
  ) { }

  ngOnInit() {
    this.getPopularPhotos();
  }

  getPopularPhotos() {
    this.mainService.getPopularPosts().subscribe(res => {
      this.posts = res.splice(0, 2);

    }, error => {
      console.log(error);
    });
  }

  insertPost() {
    this.mainService.insertPost(this.editPost).subscribe(res => {
      this.posts.push(res);
      this.editPost = null;
    }, error => {
      console.log(error);
    });
  }

  addNewPost() {
    this.editPost = new Post();
  }

  selectPostToEdit(i: number) {
    this.editPost = JSON.parse(JSON.stringify(this.posts[i]));
  }

  updatePost() {
    this.mainService.insertPost(this.editPost).subscribe(res => {
      const i = this.posts.findIndex(x => x.id === this.editPost.id);
      if (i > -1) {
        this.posts[i] = res;
      }
      this.editPost = null;
    }, error => {
      console.log(error);
    });
  }

}
