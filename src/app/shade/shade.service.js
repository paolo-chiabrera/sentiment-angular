import {Injectable} from '@angular/core';

import Please from 'pleasejs';

@Injectable()
export class ShadeService {

  constructor () {

    this.maxHue = 250;

    this.interval = 16;

    this.numShades = 3;

    this.step = 1 / this.numShades;
  }

  generateColours(hue) {

    const colours = [];

    for(let i = 0; i < this.numShades; i++){
      colours.push(Please.make_color({
        hue: hue,
        value: 1 - i * this.step,
        golden: false,
        colors_returned: 1,
        format: 'hex'
      })[0]);
    }

    return colours;
  }

  generateGreyscale() {

    const colours = [];

    for(let i = 0; i < this.numShades; i++){
      colours.push('#ccc');
    }

    return colours;
  }

  castScore(score) {
    if(score < -this.interval) return -this.interval;
    if(score > this.interval) return this.interval;
    return score;
  }

  getColoursFromSentiment(sentiment) {

    if(!sentiment) return this.generateGreyscale();

    const score = this.castScore(sentiment.score);

    const hue = Math.abs(score - this.interval) * this.maxHue / (this.interval * 2);

    return this.generateColours(hue);
  }

  getShades(sentiment) {
    return this.getColoursFromSentiment(sentiment);
  }

}
