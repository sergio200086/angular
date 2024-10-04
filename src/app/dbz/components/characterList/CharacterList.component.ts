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
  public deleteCharacter: EventEmitter<string> = new EventEmitter();

  public onDeleteCharacter(id: string | undefined): void {
    //Emit id of character
    if (!id) return
    this.deleteCharacter.emit(id);
  }
}
