import { Component } from '@angular/core';

@Component({
  selector: 'app-first-directive',
  templateUrl: './first-directive.component.html',
  styleUrls: ['./first-directive.component.scss']
})
export class FirstDirectiveComponent {

  backgroundToogle = false;

  constructor() { }

}
