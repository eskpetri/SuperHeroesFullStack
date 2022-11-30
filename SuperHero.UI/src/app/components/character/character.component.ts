import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from 'src/app/models/character';
import { CharacterService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class EditCharacterComponent implements OnInit {
  @Input() character?: Character;
  @Output() charactersUpdated = new EventEmitter<Character[]>();

  constructor(private CharacterService: CharacterService) {}

  ngOnInit(): void {}

  updateCharacter(character: Character) {
    this.CharacterService
      .updateCharacter(character)
      .subscribe((characters: Character[]) => this.charactersUpdated.emit(characters));
  }

  deleteCharacter(character: Character) {
    this.CharacterService
      .deleteCharacter(character)
      .subscribe((characters: Character[]) => this.charactersUpdated.emit(characters));
  }

  createCharacter(character: Character) {
    this.CharacterService
      .createCharacter(character)
      .subscribe((characters: Character[]) => this.charactersUpdated.emit(characters));    
  }
}

