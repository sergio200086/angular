import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  //if MainPageComponent is imported, the service will also be
  //Service is also protected
  constructor(private dbz: DbzService) {}

  public get characters() : Character[]{
    //copy of the characters with the spread
    return [...this.dbz.characters];
  }

  //Executed from the HTML
  public onDeleteCharacter(id:string):void{
    this.dbz.deleteCharacterById(id)
  }

  public onNewCharacter (character:Character){
    this.dbz.addCharacter(character)
  }
}
