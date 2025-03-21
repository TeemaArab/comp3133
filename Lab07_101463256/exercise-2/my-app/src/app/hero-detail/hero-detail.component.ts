import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hero } from '../heroes/hero';  // Import the Hero model
import { FormsModule,NgModel } from '@angular/forms'; 


@Component({
  selector: 'app-hero-detail',
  standalone: true,
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
  imports: [CommonModule, FormsModule] 
})
export class HeroDetailComponent {
  @Input() hero?: Hero; // Receive the hero object from parent
}

