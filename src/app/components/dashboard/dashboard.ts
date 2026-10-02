import { Component, signal } from '@angular/core';
import { UserComponent } from '../user-component/user-component';
import { DUMMY_USERS } from '../../dummy-users';
import { User } from '../../models/user';
import { UserPostsComponent } from '../user-posts/user-posts';

@Component({
  imports: [UserComponent,UserPostsComponent],
  selector: 'app-dashboard',
  styleUrl: './dashboard.css',
  templateUrl: './dashboard.html',
})
export class DashboardComponent {
   //PARENT COMPONENT
  public users:User[]=DUMMY_USERS;
  selectedUserId=signal<string|null>(null);
  receiveData(nameId:string){
   this.selectedUserId.set(nameId);
  }
}
