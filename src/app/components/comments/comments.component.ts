import { Component, OnInit, Input } from '@angular/core';
import { CommentsService } from 'src/app/services/comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  data:Array<any>
  openComments: boolean;
  @Input() postID;
  newComment:string;
  editComment:object;

  constructor(private commentsService: CommentsService) { 
    this.openComments = false;
    this.data = new Array<any>();
    this.editComment = {
      id: 0,
      edit: false
    }
  }

  ngOnInit(): void {
    this.commentsService.getComments(this.postID).subscribe(comments => {
      this.data = comments;
    })
  }
  
  onViewComments() {
    this.openComments = true;
  }
  
  onDisableComments() {
    this.openComments = false;
  }

  onEditComment(id) {
    this.data.map(comment => {
      if(comment.id == id){
        this.editComment = {
          id: id,
          edit: true
        };
      }
    })
  }

  onEditedComment(id) {
    this.data.map(comment => {
      if(comment.id == id){
        this.editComment = {
          id: 0,
          edit: false
        };
      }
    })
  }
  
  onDeleteComment(id) {
    let objectDeleted = '';

    this.data.map(comment => {
      if(comment.id == id){
        objectDeleted = comment
      }
    })
    
    const positionCommentDeleted = this.data.indexOf(objectDeleted)

    this.data.splice(positionCommentDeleted, 1);

  }

  onSendComment() {
    if(this.newComment.length == 0) {
    } else {
      if(this.data.length > 0){
        const lasttComm = this.data.pop();
        this.data = [...this.data, lasttComm];
        this.data.push({
          'postId': this.postID,
          'id': lasttComm.id+1,
          'name': 'Name example',
          'email': 'example@example.com',
          'body': this.newComment
        });
      } else if(this.data.length == 0) {
        this.data.push({
          'postId': this.postID,
          'id': 1,
          'name': 'Name example',
          'email': 'example@example.com',
          'body': this.newComment
        });
      }
      this.newComment=""
    }
  }

}
