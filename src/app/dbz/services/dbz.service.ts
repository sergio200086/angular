import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

//Adding ID to the logic
import { v4 as uuid } from 'uuid'

//Data that I want to manage
@Injectable({ providedIn: 'root' })
export class DbzService {
  // All the propertisof this component are available in the HTML file
  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krillin',
      power: 1000,
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 10000,
    },
    {
      id: uuid(),
      name: 'Vegetta',
      power: 7500,
    },
  ];

  //Editing characters
  // This is coming from the add character form, so when the form is submitted, we will receive the character here.
  public addCharacter(character: Character): void {
    const newCharacter:Character = { id: uuid(), ...character }
    this.characters.push(newCharacter);
  }
  
  // this.characters.splice(index, 1);
  public deleteCharacterById(id: string): void {
    console.log('calling');
    
    this.characters = this.characters.filter(character => character.id !== id)
  }
}
