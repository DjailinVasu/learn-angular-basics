import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blank-image',
  templateUrl: './blank-image.component.html',
  styleUrls: ['./blank-image.component.scss']
})
export class BlankImageComponent  {

  img = "https://cdn3.iconfinder.com/data/icons/cat-force/256/cat_hungry.png"

  constructor() {
    setTimeout(() => {
      this.img = "https://cdn3.iconfinder.com/data/icons/cat-power-premium/120/cat_foodlove-512.png"
    }, 300)
  }
}
