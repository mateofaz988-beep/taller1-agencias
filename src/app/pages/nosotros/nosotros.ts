import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// 1. IMPORTA EL HERO AQUÍ
import { HeroComponent } from '../../shared/hero/hero';

@Component({
  selector: 'app-nosotros',
  standalone: true,
  // 2. AGREGALO AQUÍ (Mantén también el RouterModule)
  imports: [CommonModule, RouterModule, HeroComponent], 
  templateUrl: './nosotros.html',
  styles: []
})
export class NosotrosComponent { }