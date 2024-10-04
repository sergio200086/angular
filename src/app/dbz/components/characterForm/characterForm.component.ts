import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './characterForm.component.html',
  styleUrl: './characterForm.component.css',
})
export class CharacterFormComponent {
  // Emit the character to be added to the list.
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  // Two way databinding with the ngModel.
  public character: Character = {
    name: '',
    power: 0,
  };

  public getCharacter(): void {
    if (this.character.name.length === 0) return;
    this.onNewCharacter.emit(this.character);
    // Clear the character
    this.character = { name: '', power: 0 };
  }
}
