import {Component} from '@angular/core';
import {Header} from './header';
import {Footer} from './footer';

import {Trianglify} from './trianglify/trianglify';
import {Sentiment} from './sentiment/sentiment';

import {ShadeService} from './shade/shade.service';

@Component({
  selector: 'App',
  template: `
    <div class="main-container">
      <Header [colour]="colour"></Header>
      <main class="main">
        <trianglify [shades]="shades"></trianglify>
        <sentiment (onSentimentChange)="onSentimentChange($event)"></sentiment>
      </main>
      <Footer [colour]="colour"></Footer>
    </div>
  `,
  directives: [Header, Footer, Trianglify, Sentiment],
  providers: [ShadeService]
})
export class Main {

  shades = [];

  colour = '#fff';

  constructor(shadeService: ShadeService) {
    this.shadeService = shadeService;
  }

  onSentimentChange(sentiment) {
    this.shades = this.shadeService.getShades(sentiment);
    this.colour = this.shades[0];
  }

  ngOnInit() {
    this.shades = this.shadeService.getShades();
  }
}
