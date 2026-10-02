import { Component, computed, input } from '@angular/core';
import { Post } from '../../models/post';
import { DUMMY_POSTS } from '../../dummy-posts';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-user-posts',
  styleUrl: './user-posts.css',
  templateUrl: './user-posts.html',
})
export class UserPostsComponent {
  public userPosts:Post[]=DUMMY_POSTS;
// 1. Accept the selected user's ID as an input
  userId = input.required<string>();

  // 2. Automatically filter posts whenever the userId input changes
  filteredPosts = computed(() => {
    return this.userPosts.filter(post => post.userId === this.userId());
  });
}
