import { Component, ElementRef, Input } from '@angular/core';

import $ from 'jquery';
import TrianglifyJS from 'trianglify';

@Component({
  selector: 'trianglify',
  template: ''
})
export class Trianglify {

  @Input() shades;

  constructor(el: ElementRef) {

    this.interval = null;

    this.shades = ['#fff', '#fff', '#fff'];

    this.pattern = null;

    this.el = el.nativeElement;

    window.onresize = () => {
      this.generate()
    };
  }

  setSize() {
    this.width = $(this.el).width();
    this.height = $(this.el).height();
  }

  generate() {

    this.setSize();

    this.pattern = TrianglifyJS({width: this.width, height: this.height, x_colors: this.shades});

    const canvasElement = this.pattern.canvas();

    $(this.el).html(canvasElement);

    if(this.interval !== null) clearInterval(this.interval);

    this.interval = setInterval( () => {
      this.generate();
    }, 4000);
  }

  ngOnChanges(changes) {
    if(changes.shades) {
      this.shades = changes.shades.currentValue;
      this.generate();
    }
  }

  ngOnInit() {
    this.setSize();
  }
}
