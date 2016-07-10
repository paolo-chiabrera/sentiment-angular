import {Component, Input} from '@angular/core';

@Component({
  selector: 'Footer',
  template: `
    <footer class="footer">
      Created by &nbsp;
      <a href="https://github.com/paolo-chiabrera" [ngStyle]="{'color': colour}">
        Paolo Chiabrera
      </a>
    </footer>
  `
})
export class Footer {
  @Input() colour;
}
