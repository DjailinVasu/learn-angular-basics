import { Component } from '@angular/core';

@Component({
  selector: 'app-trying-events',
  templateUrl: './trying-events.component.html',
  styleUrls: ['./trying-events.component.scss']
})
export class TryingEventsComponent{

  inputValue=''


  constructor() { }

  onInput(event: KeyboardEvent) {
      console.log('event', event)
      this.inputValue = (<HTMLInputElement>event.target).value
  }

  onClick() {
    console.log('click!')
  }

  onBlur(str: string) {
    this.inputValue = str;
  }
}
