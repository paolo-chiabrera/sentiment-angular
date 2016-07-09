import {Component, Input} from '@angular/core';

@Component({
  selector: 'Footer',
  template: `
    <footer class="footer">
      Created by the&nbsp;
      <a href="https://github.com/paolo-chiabrera" [ngStyle]="{'color': colour}">
        Paolo Chiabrera
      </a>
    </footer>
  `
})
export class Footer {
  @Input() colour;
}
