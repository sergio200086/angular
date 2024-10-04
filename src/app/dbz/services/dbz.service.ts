import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

//Data that I want to manage
@Injectable({ providedIn: 'root' })
export class DbzService {
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

  //Editing characters
  // This is coming from the add character form, so when the form is submitted, we will receive the character here.
  public onNewCharacter(character: Character): void {
    this.characters.push(character);
  }

  public deleteCharacter(index: number): void {
    this.characters.splice(index, 1);
  }
}
