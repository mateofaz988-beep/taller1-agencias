import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// 1. Importa RouterLink y RouterLinkActive
import { RouterLink, RouterLinkActive } from '@angular/router'; 

@Component({
  selector: 'app-navbar',
  standalone: true,
  // 2. Agrégalos aquí para que el HTML los reconozca
  imports: [CommonModule, RouterLink, RouterLinkActive], 
  templateUrl: './navbar.html',
  styleUrl: './navbar.css' // Asegúrate de que el nombre coincida
})
export class NavbarComponent {
  isOpen = false;

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }
}