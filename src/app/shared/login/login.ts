import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth-service/auth-service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
   standalone: true,
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  email: string = '';
  password: string = '';

  private servicioAuth = inject(AuthService);
  private router = inject(Router);

  iniciarsecion() {
    this.servicioAuth.login(this.email, this.password).subscribe(success => {

      if (success) {

        alert('Bienvenidos al sistema');

        const usuario = this.servicioAuth.getUsuarioActual();

        // 🔥 Redirección según rol
        if (usuario?.rol === 'ADMIN') {
          this.router.navigateByUrl('/admin');
        } else {
          this.router.navigate(['/usuarios']);
        }

      } else {
        alert('Error: usuario no autenticado');
      }

    });
  }

  cerrarsesion() {
    this.servicioAuth.logout();
  }
}