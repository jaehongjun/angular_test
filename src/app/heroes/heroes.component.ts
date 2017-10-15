import { Component, OnInit } from '@angular/core';
import { Hero } from '../Hero'
import {HeroService} from '../hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor(private heroservice : HeroService,
    private _router : Router
  ){}
  
  title = 'Tour of Heroes';
  heroes : Hero[];
  selectedHero : Hero;
  onSelect(hero : Hero) : void{
    this.selectedHero = hero;
  }
  gotoDetail(): void { this._router.navigate(['/detail', this.selectedHero.id]); }
  
  ngOnInit() : void{
    this.heroservice.getHeroes()
    .then(result => this.heroes = result);
  }

}
