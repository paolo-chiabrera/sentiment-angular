import { Component, Output, EventEmitter, Response } from '@angular/core';

import { SentimentService } from './sentiment.service';

@Component({
  selector: 'sentiment',
  template: `
    <div class="wrapper">
      <p>Write something and the background colour will change based on the sentiment you're expressing!</p>
      <textarea [(ngModel)]="freeText" (keyup)="changeText()" placeholder="Start to write.."></textarea>
    </div>
  `,
  providers: [SentimentService]
})
export class Sentiment {

  @Output() onSentimentChange = new EventEmitter();

  freeText = '';

  timeout = null;

  constructor(sentimentService: SentimentService) {
    this.sentimentService = sentimentService;
  }

  getSentiment(str) {
    this.sentimentService
      .getSentiment(str)
      .then((res: Response) => {
        this.onSentimentChange.emit(res.json());
      });
  }

  changeText() {

    if(this.timeout !== null) clearTimeout(this.timeout);

    this.timeout = setTimeout( () => {
      this.getSentiment(this.freeText);
    }, 400);
  }

  ngOnInit() {
    this.changeText()
  }
}
