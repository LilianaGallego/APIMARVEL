import { Component, Input, OnInit } from '@angular/core';
import {  CharacterDTO } from 'src/app/models/character.model';
import { CharacterService } from '../../services/character.service';
@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})

export class CharacterListComponent implements OnInit{

  @Input() characters: CharacterDTO[]=[]

  constructor(
    private characterService: CharacterService
    ){}
    numCharacters:number=21;
  ngOnInit(): void {


    this.characterService.getAllCharacters(this.numCharacters.toString())
    .subscribe({
      next: data => {
        this.characters = data;
        console.log('characters :>> ', this.characters);
      },
      error: error => {
        console.log(error);
      }
    })
  }
  onLoadMore() {
    this.numCharacters +=9;
    this.characterService.getAllCharacters(this.numCharacters.toString())
    .subscribe(data => {
      this.characters = [];
      this.characters = this.characters.concat(data);
    });
  }

}
