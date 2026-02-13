import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Viaje } from '../../models/viaje/viaje';

@Component({
  selector: 'app-gestion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gestion.html'
})
export class GestionComponent {

  inventario: Viaje[] = [
    { id: 1, nombre: 'Galápagos', categoria: 'Playa', precio: 1200,  oferta: true },
    { id: 2, nombre: 'Cotopaxi', categoria: 'Montaña', precio: 80,  oferta: false },
    { id: 3, nombre: 'Baños', categoria: 'Aventura', precio: 100, oferta: true },
  ];

  carrito: Viaje[] = [];
  total: number = 0;
  verPago: boolean = false;

  
  seleccionar(viaje: Viaje): void {
    
    this.carrito = [...this.carrito, viaje];
    

    this.total = this.total + viaje.precio;
  }

  abrirCaja(): void {
    if (this.total > 0) {
      this.verPago = true;
    }
  }

  cerrarCaja(): void {
    this.verPago = false;
  }

  pagarTodo(): void {
    alert('Pago exitoso de: $' + this.total);
    this.carrito = []; 
    this.total = 0;    
    this.cerrarCaja();
  }
}