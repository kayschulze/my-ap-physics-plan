import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-slide',
  templateUrl: './message-slide.component.html',
  styleUrls: ['./message-slide.component.css']
})

export class MessageSlideComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var slideIndex = 0;

    var carousel = function() {
      var x = Array.from(document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>);
      for (var i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > x.length) {
        slideIndex = 1
      }
      x[slideIndex-1].style.display = "block";
      setTimeout(carousel, 2000);
    }
      carousel();
  }
}
/*

*/
