import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../services/auth-service/auth-service'; // ✅ Verifica esta ruta

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class NavbarComponent {
  isOpen = false;
  
  // ✅ SERVICIO INYECTADO CORRECTAMENTE
  authService = inject(AuthService);

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }
}