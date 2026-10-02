import { Component } from '@angular/core';

@Component({
  imports: [],
  standalone:true,
  selector: 'app-header-component',
  styleUrl: './header-component.css',
  templateUrl: './header-component.html',
})
export class HeaderComponent {
 public name:string="Priya";
 public navElements:string[]=["home","about","help"];
}
