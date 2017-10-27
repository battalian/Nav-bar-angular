import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-element',
  templateUrl: './nav-element.component.html',
  styleUrls: ['./nav-element.component.css']
})
export class NavElementComponent  {
  home = 'home';
  about = 'About';
  contacts = 'Contacts';
  curActive = 1;
  constructor() { }

  isActive(inp: number ) {

    if (this.curActive === inp){
      return 'active';}
      return null;
  }

  toggle(inp: number){
    this.curActive = inp;
  }
}
