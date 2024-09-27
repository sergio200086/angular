import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{ counter }}</h3>
    <button (click)="increaseBy(1)">Incrementar</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="increaseBy(-1)">Decrementar</button>
  `,
})
export class CounterComponent {
  constructor() {}
}
