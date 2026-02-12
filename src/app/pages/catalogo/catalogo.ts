import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importante para el buscador
import { ViajeService } from '../../services/viaje';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './catalogo.html'
})
export class CatalogoComponent implements OnInit {
  private _viajeService = inject(ViajeService);
  viajes: any[] = [];
  filtro: string = '';

  ngOnInit() { this.viajes = this._viajeService.getViajes(); }

  get viajesFiltrados() {
    return this.viajes.filter(v => v.destino.toLowerCase().includes(this.filtro.toLowerCase()));
  }
}