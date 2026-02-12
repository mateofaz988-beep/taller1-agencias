import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-gestion',
  standalone: true, // Importante para tu estructura actual
  imports: [CommonModule, FormsModule],
  templateUrl: './gestion.html',
  styleUrl: './gestion.css',
})
export class GestionComponent {
  // Modelo para el nuevo viaje
  nuevoViaje = {
    destino: '',
    precio: 0,
    categoria: 'Playa',
    oferta: false,
    imagen: ''
  };

  guardarViaje() {
    console.log('Viaje guardado:', this.nuevoViaje);
    // Aquí luego conectaremos con el servicio para añadirlo a la lista
    alert('¡Viaje guardado con éxito!');
  }
}