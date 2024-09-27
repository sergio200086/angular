import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public title: string = 'Mi primera app de angular';
  public counter: number = 0;

  public increaseBy(value: number): void {
    this.counter += value;
  }

  public resetCounter(): void {
    this.counter = 0;
  }
}
