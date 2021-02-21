import { Component, OnInit, Input } from '@angular/core';
import { CommentsService } from 'src/app/services/comments.service';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss']
})
export class AddCommentComponent implements OnInit {

  @Input() postID;
  data:Array<any>;
  newComment:string;

  constructor(private commentsService: CommentsService) {
    this.data = new Array;
    this.newComment = "";
  }

  ngOnInit(): void {
    this.commentsService.getComments(this.postID).subscribe(comments => {
      this.data = comments;
      // console.log(this.data)
    })
  }

  onSendComment() {
    // this.data.map(comments => {
    // })
    this.data.push({
      'postId': this.postID,
      'id': this.data.length+1,
      'name': 'Name example',
      'body': this.newComment
    });
    console.log(this.data)
  }

}
