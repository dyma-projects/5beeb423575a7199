import { Directive, HostListener, HostBinding } from '@angular/core';

export enum KEY_CODE {
  UP_ARROW = 38,
  RIGHT_ARROW = 39,
  DOWN_ARROW = 40,
  LEFT_ARROW = 37
}

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  @HostBinding('style.color') colorFont = 'black';
  constructor() {
   }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.keyCode === KEY_CODE.RIGHT_ARROW) {
      this.colorFont = 'orange';
    }

    if (event.keyCode === KEY_CODE.LEFT_ARROW) {
      this.colorFont = 'green';
    }

    if (event.keyCode === KEY_CODE.UP_ARROW) {
      this.colorFont = 'red';
    }

    if (event.keyCode === KEY_CODE.DOWN_ARROW) {
      this.colorFont = 'blue';
    }
  }
}
