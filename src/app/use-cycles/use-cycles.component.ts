import { Component } from '@angular/core';

@Component({
  selector: 'app-use-cycles',
  templateUrl: './use-cycles.component.html',
  styleUrls: ['./use-cycles.component.scss']
})
export class UseCyclesComponent {

  arr = [1, 1, 2, 3, 5, 8, 13];

  objects = [
    {title: 'Post 1', author: 'Mary', comments: [
      {name: 'Ira', text: 'lorem1'},
      {name: 'Ira', text: 'lorem2'},
      {name: 'Ira', text: 'lorem3'}
    ]},
    {title: 'Post 2', author: 'Mary2', comments: [
      {name: 'Ira2', text: 'lorem1'},
      {name: 'Ira2', text: 'lorem2'},
      {name: 'Ira2', text: 'lorem3'}
    ]}
  ]
  constructor() { }

}
