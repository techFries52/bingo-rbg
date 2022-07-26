import { Component, OnInit } from '@angular/core';
import { Tile } from 'src/model/Tile';

@Component({
  selector: 'app-bingo-card',
  templateUrl: './bingo-card.component.html',
  styleUrls: ['./bingo-card.component.css']
})
export class BingoCardComponent implements OnInit {

  freeTile: Tile = {id:24, str:"FREE", isPicked: true};
  tiles: Tile[] = [
    {id:0, str:"shitty portal placement", isPicked: false},
    {id:1, str:"pug mad over push to talk", isPicked: false},
    {id:2, str:"Dott gets mad", isPicked: false},
    {id:3, str:"Mathius smokes", isPicked: false},
    {id:4, str:"Dott talks baseball", isPicked: false},
    {id:5, str:"'Fuck the Dodgers'", isPicked: false},
    {id:6, str:"angry about base sitting", isPicked: false},
    {id:7, str:"Dott talks bout meeting celebrities", isPicked: false},
    {id:8, str:"begging for druid", isPicked: false},
    {id:9, str:"Scop says 'good try guys'", isPicked: false},
    {id:10, str:"Dott is murderous", isPicked: false},
    {id:11, str:"at least 3 people high", isPicked: false},
    {id:12, str:"'Spin the flag'", isPicked: false},
    {id:13, str:"poutine talk", isPicked: false},
    {id:14, str:"cucked by ice wall", isPicked: false},
    {id:15, str:"Trene goes to a wedding", isPicked: false},
    {id:16, str:"Trene/Ty and Ophie take BS", isPicked: false},
    {id:17, str:"Dark caps flag/base", isPicked: false},
    {id:18, str:"Dumbass pug", isPicked: false},
    {id:19, str:"Narkin tells a story", isPicked: false},
    {id:20, str:"Fries ghosts a base", isPicked: false},
    {id:21, str:"Someone gets booped off", isPicked: false},
    {id:22, str:"spot holder", isPicked: false},
    {id:23, str:"spot holder 2", isPicked: false}
  ]

  constructor() { }

  ngOnInit(): void {
    this.tiles.sort(() => Math.random() - 0.5)
    this.tiles.splice(12,0,this.freeTile);
  }

  getRandomNumber(){
    return Math.floor(Math.random() * 24)
  }

  handleBooleanChange(tile: Tile){
    tile.isPicked = true;
    document.getElementById
  }
}
