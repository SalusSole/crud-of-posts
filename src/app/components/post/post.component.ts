import { Component, OnInit } from '@angular/core';
import { CommentsService } from 'src/app/services/comments.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  data: Array<any>; 
  constructor(private commentsService: CommentsService) {
    this.data = new Array<any>();
  }
  
  ngOnInit(): void {
    this.commentsService.getPosts().subscribe(posts => {
      this.data = posts;
    })
  }

}
