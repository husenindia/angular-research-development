import { Component, OnInit, Renderer2  } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private renderer: Renderer2) { }
  showSidebar = false;
  
  ngOnInit() {    
  }
  toggleSidebar() {
    if(!this.showSidebar) {
      this.renderer.addClass(document.body, 'sidebar-close');
    } else {
      this.renderer.removeClass(document.body, 'sidebar-close');
    }
    this.showSidebar=!this.showSidebar;
  }
}
