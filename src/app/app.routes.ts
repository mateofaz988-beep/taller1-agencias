import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { CatalogoComponent } from './pages/catalogo/catalogo'; // Ruta según tu carpeta
import { GestionComponent } from './pages/gestion/gestion';   // Ruta según tu carpeta

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
    path: '**', 
    redirectTo: '' 
  }
];