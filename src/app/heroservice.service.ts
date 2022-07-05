import { Injectable } from '@angular/core';
import { Heroclass } from './heroclass';
import { HEROES } from './mockheros';

@Injectable(
  {
    providedIn: 'root',
  }
)
export class HeroserviceService {

  constructor() { }

  getHeroes(): Heroclass[] {
    return HEROES;
  }
  
  

}