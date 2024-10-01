import { Component,Input } from "@angular/core";
import { Character } from "../../interfaces/character.interface";

@Component({
  selector: 'dbz-character-list',
  templateUrl: './characterList.component.html',
  styleUrl: './CharacterList.component.css',
})
export class CharacterListComponent { 
  
  @Input()
  public characterList: Character[] = []

}
