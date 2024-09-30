import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames: string[]=['Spiderman', 'Hulk', 'Thor', 'Ironman', 'Viuda Negra', 'Black Panther']
  public lastHeroDeleted?: string = ""
  public deleteLastHero(): void{
    this.lastHeroDeleted = this.heroNames.pop()
  }

}
