import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-character-list',
  templateUrl: './characterList.component.html',
  styleUrl: './CharacterList.component.css',
})
export class CharacterListComponent {
  @Input()
  public characterList: Character[] = [];

  @Output()
  public deleteCharacter: EventEmitter<number> = new EventEmitter();

  public onDeleteCharacter(index: number): void {
    //Emit id of character
    this.deleteCharacter.emit(index);
  }
}
