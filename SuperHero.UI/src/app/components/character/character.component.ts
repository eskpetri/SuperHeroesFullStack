import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from 'src/app/models/character';
import { CharacterService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-edit-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css'],
})
export class EditCharacterComponent implements OnInit {
  @Input() character?: Character;
  @Output() characteresUpdated = new EventEmitter<Character[]>();

  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {}

  updateCharacter(character: Character) {
    this.characterService
      .updateCharacter(character)
      .subscribe((characteres: Character[]) => this.characteresUpdated.emit(characteres));
  }

  deletecharacter(character: Character) {
    this.characterService
      .deleteCharacter(character)
      .subscribe((characteres: Character[]) => this.characteresUpdated.emit(characteres));
  }

  createcharacter(character: Character) {
    this.characterService
      .createCharacter(character)
      .subscribe((characteres: Character[]) => this.characteresUpdated.emit(characteres));
  }
}

