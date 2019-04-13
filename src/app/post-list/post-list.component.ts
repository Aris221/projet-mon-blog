import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  @Input() titlePost: string;
  @Input() content: string ;
  @Input() loveIts: number;
  @Input() created_at: Date;
  constructor() {
    this.created_at = new Date();
  }

  ngOnInit() {
  }
  getColor(){
    if(this.loveIts > 0){
      return 'green';
    }else if(this.loveIts < 0){
      return 'red';
    }
  }
  likeIt(){
    this.loveIts = this.loveIts + 1;
  }
  noLikeIt(){
    this.loveIts = this.loveIts - 1;
  }

}
