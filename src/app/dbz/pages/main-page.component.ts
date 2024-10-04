import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  // All the propertisof this component are available in the HTML file
  public characters: Character[] = [
    {
      name: 'Krillin',
      power: 1000,
    },
    {
      name: 'Goku',
      power: 10000,
    },
    {
      name: 'Vegetta',
      power: 7500,
    },
  ];

  // This is coming from the add character form, so when the form is submitted, we will receive the character here.
  public onNewCharacter(character: Character): void {
    console.log(character);
    this.characters.push(character);
  }

  public deleteCharacter(index: number): void {
    console.log(index);
    this.characters.splice(index, 1);
  }
}
