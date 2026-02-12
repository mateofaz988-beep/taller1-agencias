import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.html', 
  styleUrl: './hero.css',
  imports: [CommonModule]
})
export class HeroComponent { }