import { Component } from '@angular/core';

@Component({
  selector: 'app-use-pipes',
  templateUrl: './use-pipes.component.html',
  styleUrls: ['./use-pipes.component.scss']
})
export class UsePipesComponent {

  now: Date = new Date()

  constructor() { }

}
