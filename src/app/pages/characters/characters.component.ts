import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharactersData, ICharactersData } from './characters.data';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  characterName: string;
  characterData: ICharactersData;
  charactersData = CharactersData;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.characterName = params['name'];
      this.getCharacter(this.characterName);
    });
  }

  showCharacter(character: ICharactersData) {
    this.router.navigate([`/characters/${character.alias}`]);
  }

  getCharacter(characterAlias: string) {
    const getCharacterData = this.charactersData.filter(item => item.alias === characterAlias);
    if (!getCharacterData.length) {
      this.router.navigate(['/characters']);
    }
    this.characterData = getCharacterData[0];
  }

}