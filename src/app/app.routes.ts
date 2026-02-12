import { Routes } from '@angular/router';

// Importaciones de tus páginas
import { HomeComponent } from './pages/home/home';
import { CatalogoComponent } from './pages/catalogo/catalogo';
import { GestionComponent } from './pages/gestion/gestion';

// Importaciones de Andy integradas
import { Formulario } from './shared/formulario/formulario';
import { Usuarios } from './pages/usuarios/usuarios';

export const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent, 
    title: 'Inicio - Agencia de Viajes' 
  },
  { 
    path: 'catalogo', 
    component: CatalogoComponent, 
    title: 'Catálogo - Nuestros Destinos' 
  },
  { 
    path: 'gestion', 
    component: GestionComponent, 
    title: 'Gestión - Administrar Viajes' 
  },
  { 
    path: 'formulario', 
    component: Formulario,
    title: 'Formulario de Registro'
  },
  { 
    path: 'usuarios', 
    component: Usuarios,
    title: 'Administración de Usuarios'
  },
  
  // Redirige cualquier ruta no encontrada al Inicio
  { 
    path: '**', 
    redirectTo: '' 
  }
];