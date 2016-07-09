import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class SentimentService {

  constructor (http: Http) {
    this.http = http;
  }

  getSentiment(str: String) {
    return this.http
      .get('http://api.sentiment.d3lirium.eu/sentiment?text=' + str)
      .toPromise()
  }
}
