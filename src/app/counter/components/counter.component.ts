import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{ counter }}</h3>
    <button (click)="increaseBy(-1)" class="btn btn-outline-danger">-1</button>
    <button (click)="resetCounter()" class="btn btn-outline-warning">Reset</button>
    <button (click)="increaseBy(1)" class="btn btn-outline-primary">+1</button>
  `,
})
export class CounterComponent {
  public counter: number = 0;

  public increaseBy(value: number): void {
    this.counter += value;
  }

  public resetCounter(): void {
    this.counter = 0;
  }
}
