import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainPageComponent } from './pages/main-page.component';
import { CharacterListComponent } from './components/characterList/CharacterList.component';
import { CharacterFormComponent } from './components/characterForm/characterForm.component';

@NgModule({
  declarations: [
    MainPageComponent,
    CharacterListComponent,
    CharacterFormComponent,
  ],
  exports: [MainPageComponent],
  imports: [CommonModule, FormsModule],
})
export class DbzModule {}
