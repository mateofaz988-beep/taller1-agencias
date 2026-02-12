import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../shared/hero/hero';
import { Portafolio } from '../../shared/portafolio/portafolio';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeroComponent,Portafolio],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {
  viajesDestacados = [
    {
      nombre: 'Maldivas Paradise',
      descripcion: 'Disfruta de aguas cristalinas y resorts de lujo en el corazón del océano.',
      precio: 1200,
      imagen: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80',
      categoria: 'Playa'
    },
    {
      nombre: 'Aventura en los Alpes',
      descripcion: 'Esquí y senderismo en los paisajes nevados más impresionantes de Europa.',
      precio: 850,
      imagen: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=500&q=80',
      categoria: 'Montaña'
    },
    {
      nombre: 'Tokio Moderno',
      descripcion: 'Descubre la mezcla perfecta entre tradición milenaria y tecnología futurista.',
      precio: 1500,
      imagen: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=500&q=80',
      categoria: 'Ciudad'
    }
  ];
}