import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-post-details',
  styleUrl: './post-details.css',
  templateUrl: './post-details.html',
})
export class PostDetailsComponent {
postId=input.required<number>();

  
}
