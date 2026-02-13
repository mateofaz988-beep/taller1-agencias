// CAMBIA '@angular/common' POR '@angular/core' en la línea 1
import { Component, Input } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './hero.html'
})
export class HeroComponent {
  @Input() titulo: string = 'Agencias de Viajes';
  @Input() resaltado: string = 'AIR593';
  @Input() imagenUrl: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGrw750HLjOYbUmOlBvYGHv-l5WyoTJEHB8g&s';
}