import {Component, Input} from '@angular/core';

@Component({
  selector: 'Header',
  template: `
    <header class="header">
      <p class="header-title">
        <a href="/" [ngStyle]="{'color': colour}">
          Visual sentiment
        </a>
      </p>
    </header>
  `
})
export class Header {
  @Input() colour;
}
