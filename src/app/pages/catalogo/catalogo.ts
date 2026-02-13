import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
// 1. IMPORTANTE: Importa FormsModule para que ngModel funcione
import { FormsModule } from '@angular/forms'; 
import { HeroComponent } from '../../shared/hero/hero';
import { ViajeService, Viaje } from '../../services/viaje';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  // 2. AGREGA FormsModule e HeroComponent aquí
  imports: [CommonModule, FormsModule, HeroComponent], 
  templateUrl: './catalogo.html',
  styleUrl: './catalogo.css'
})
export class CatalogoComponent implements OnInit {
  // Inyectamos el servicio
  private _viajeService = inject(ViajeService);

  // 3. DECLARA las propiedades que faltaban
  filtro: string = ''; // Para el buscador
  viajes: Viaje[] = []; // Para guardar todos los viajes

  ngOnInit(): void {
    // Cargamos los viajes al iniciar
    this.viajes = this._viajeService.getViajes();
  }

  // 4. LÓGICA DE FILTRADO: Esto crea la lista 'viajesFiltrados' que pide tu HTML
  get viajesFiltrados(): Viaje[] {
    if (!this.filtro) {
      return this.viajes;
    }
    return this.viajes.filter(v => 
      v.destino.toLowerCase().includes(this.filtro.toLowerCase()) ||
      v.categoria.toLowerCase().includes(this.filtro.toLowerCase())
    );
  }

  // 5. MÉTODO PARA RESERVAR: El que llama el botón (click)
  agregarReserva(viaje: Viaje): void {
    this._viajeService.agregarReserva(viaje);
  }
}