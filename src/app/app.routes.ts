import { Routes } from '@angular/router';

// Importamos los componentes de las páginas
// Asegúrate de que los nombres de las clases coincidan con tus archivos .ts
import { HomeComponent } from './pages/home/home';
import { Formulario } from './shared/formulario/formulario';
import { Usuarios } from './pages/usuarios/usuarios';



export const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent,
    title: 'Inicio - Agencia de Viajes' 

  },
   { path: 'formulario', component: Formulario

   },
      { path: 'usuarios', component: Usuarios },
    

  
  // Redirige cualquier ruta no encontrada al Inicio
  { 
    path: '**', 
    redirectTo: '' 
  }
];