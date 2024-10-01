import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';
import { CharacterListComponent } from './components/characterList/CharacterList.component';
import { CharacterFormComponent } from './components/characterForm/characterForm.component';



@NgModule({
  declarations: [MainPageComponent, CharacterListComponent, CharacterFormComponent],
  exports:[
    MainPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DbzModule { }
