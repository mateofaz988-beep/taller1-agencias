import { Injectable, signal, inject } from '@angular/core';
import { Observable, map, catchError, throwError } from 'rxjs';
import { UsuarioServicio } from '../usuario-servicio/usuario-servicio';
import { Usuario } from '../../models/usuario/usuario';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private servicioUsuario = inject(UsuarioServicio);

  // ✅ Signals para la UI reactiva
  sesioniniciada = signal<boolean>(localStorage.getItem('sesioniniciada') === 'true');
  rolActual = signal<string | null>(localStorage.getItem('rol'));

  // ✅ Login con tipo de retorno explícito y manejo de errores
  login(email: string, password: string): Observable<boolean> {
    return this.servicioUsuario.getUsuarios().pipe(
      map((Usuarios: Usuario[]) => {
        const usuarioCoincide = Usuarios.find(u => 
          u.email === email && u.password === password
        );
        
        if (usuarioCoincide) {
          // Guardar en localStorage
          localStorage.setItem('sesioniniciada', 'true');
          localStorage.setItem('usuario', JSON.stringify(usuarioCoincide));
          localStorage.setItem('rol', usuarioCoincide.rol);
          
          // ✅ ACTUALIZAR LOS SIGNALS (CRÍTICO para que la UI reaccione)
          this.rolActual.set(usuarioCoincide.rol);
          this.sesioniniciada.set(true);
          
          return true;
        }
        return false;
      }),
      catchError(error => {
        console.error('❌ Error en login:', error);
        return throwError(() => error);
      })
    );
  }

  // ✅ Logout funcional - Limpia todo y actualiza signals
  logout() {
    localStorage.removeItem('sesioniniciada');
    localStorage.removeItem('usuario');
    localStorage.removeItem('rol');
    
    // ✅ RESETear los signals para actualizar la UI inmediatamente
    this.rolActual.set(null);
    this.sesioniniciada.set(false);
  }

  // ✅ Método auxiliar para obtener usuario actual
  getUsuarioActual(): Usuario | null {
    const usuarioStr = localStorage.getItem('usuario');
    return usuarioStr ? JSON.parse(usuarioStr) : null;
  }

  // ✅ Verificar si es admin
  esAdmin(): boolean {
    return this.rolActual() === 'admin';
  }

  // ✅ Verificar si está autenticado
  estaAutenticado(): boolean {
    return this.sesioniniciada();
  }
}