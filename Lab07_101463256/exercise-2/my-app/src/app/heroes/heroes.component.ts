import { Component } from '@angular/core';
import { HEROES } from '../mock.heroes'; 
import { CommonModule } from '@angular/common';
import { HeroNamePipe } from '../hero-name.pipe';
import { Hero } from '../heroes/hero';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';


@Component({
  selector: 'app-heroes',
  standalone: true,
  templateUrl: './heroes.component.html',
  styleUrls:['./heroes.component.css'] ,
  imports: [CommonModule, HeroNamePipe, HeroDetailComponent] 
})
export class HeroesComponent {
  heroes = HEROES;
  selectedHero?: Hero;
  isHeroVisible = true;
  uppercaseText = '';
  toggleHeroVisibility() {
    this.isHeroVisible = !this.isHeroVisible;
  }
  convertToUppercase(value: string) {  // Function to update uppercase text
    this.uppercaseText = value.toUpperCase();
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;  // Set selected hero
  }
}
