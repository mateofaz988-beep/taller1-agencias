import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Necesario para [class.hidden]

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html', // <--- Quitamos ".component"
  styleUrl: './navbar.css'
})
export class NavbarComponent { // <--- Asegúrate que se llame NavbarComponent
  isOpen = false;

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }
}