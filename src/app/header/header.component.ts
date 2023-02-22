import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }

  openMenu(){
    if($("body").hasClass("mobile-nav-active")) {      
      $("body").removeClass("mobile-nav-active");
    } else {
      $("body").addClass("mobile-nav-active");
    }
  }

  closeNav() {
    if($("body").hasClass("mobile-nav-active")) {      
      $("body").removeClass("mobile-nav-active");
    }
  }
}
