import { Component, EventEmitter, input, Output } from '@angular/core';
import { User } from '../../models/user';

@Component({
  imports: [],
  selector: 'app-user-component',
  styleUrl: './user-component.css',
  templateUrl: './user-component.html',
})
export class UserComponent {
  //CHILD COMPONENT
myuser = input.required<User>();
@Output() emitter= new EventEmitter<string>();

emitData(userId:string){
   this.emitter.emit(userId);
}

}
