import { Routes } from '@angular/router';

// Importamos los componentes de las páginas
// Asegúrate de que los nombres de las clases coincidan con tus archivos .ts
import { HomeComponent } from './pages/home/home';



export const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent,
    title: 'Inicio - Agencia de Viajes' 
  },

  
  // Redirige cualquier ruta no encontrada al Inicio
  { 
    path: '**', 
    redirectTo: '' 
  }
];