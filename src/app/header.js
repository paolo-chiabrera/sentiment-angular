import {Component, Input} from '@angular/core';

@Component({
  selector: 'Header',
  template: `
    <header class="header">
      <p class="header-title">
        <a href="/" [ngStyle]="{'color': colour}">
          Sentiment experiment
        </a>
      </p>
    </header>
  `
})
export class Header {
  @Input() colour;
}
