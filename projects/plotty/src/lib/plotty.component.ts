import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'lib-plotty',
  template: `<canvas id="plotty"></canvas>`,
  styles: []
})
export class Plotty implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
    const canvas = <HTMLCanvasElement> document.getElementById('plotty');
    const context = canvas.getContext('2d');
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(300, 150);
    context.stroke();
  }

}
