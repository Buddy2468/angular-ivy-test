import { Component, OnInit } from '@angular/core';
import {Heroclass} from '../heroclass'
import { HeroserviceService } from '../heroservice.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css','../app.component.css']
})
export class HeroComponent implements OnInit {
  
  heroes: Heroclass[]=[];
  selectedHero?: Heroclass;
  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }
  onSelect(hero: Heroclass): void {
    this.selectedHero = hero;
  }
  constructor(private heroService: HeroserviceService) { }

  ngOnInit() {
    this.getHeroes;
  }

}