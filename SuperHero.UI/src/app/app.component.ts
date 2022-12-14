import { Component } from '@angular/core';
import { SuperHero } from './models/super-hero';
import { SuperHeroService } from './services/super-hero.service';
import { Character } from './models/character';
import { CharacterService } from './services/characters.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'SuperHero.UI';
  heroes: SuperHero[] = [];
  heroToEdit?: SuperHero;
  characters: Character[] = [];
  characterToEdit?: Character;

  constructor(private superHeroService: SuperHeroService, private characterService: CharacterService) {}

  ngOnInit(): void {
    this.superHeroService
      .getSuperHeroes()
      .subscribe((result: SuperHero[]) => (this.heroes = result));
    this.characterService
      .getCharacters()
      .subscribe((result: Character[]) => (this.characters = result));
  }

  updateHeroList(heroes: SuperHero[]) {
    this.heroes = heroes;
    console.log('Updated HeroList')
    console.log('Heroes'+heroes[0].id)
  }

  initNewHero() {
    this.heroToEdit = new SuperHero();
  }

  editHero(hero: SuperHero) {
    this.heroToEdit = hero;
  }
  updateCharacterList(characters: Character[]) {
    this.characters = characters;
    console.log('Updated CharacterList')
    console.log('Character'+characters[0].id+' this.:'+this.characters[0].name)
  }

  initNewCharacter() {
    this.characterToEdit = new Character();
  }

  editCharacter(character: Character) {
    this.characterToEdit = character;
  }

}
