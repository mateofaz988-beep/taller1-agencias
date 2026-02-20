import { Routes } from '@angular/router';

// Importaciones de tus páginas
import { HomeComponent } from './pages/home/home';
import { CatalogoComponent } from './pages/catalogo/catalogo';
import { GestionComponent } from './pages/gestion/gestion';
import { NosotrosComponent } from './pages/nosotros/nosotros';
import { ContactanosComponent } from './pages/contactanos/contactanos'; // <--- Nueva importación

// Importaciones de compartidos y otros

import { Login } from './shared/login/login';
import { FormularioCuenta } from './shared/formulario-cuenta/formulario-cuenta';


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
    path: 'nosotros',
    component: NosotrosComponent, 
    title: 'Sobre Nosotros - Agencia de Viajes' 
  },
  { 
    path: 'contactanos', // <--- Nueva ruta añadida
    component: ContactanosComponent, 
    title: 'Contacto - Agencia AIR593' 
  },

   { path: 'login', component: Login, 
    title: 'Iniciar Sesión'
   },
    { path: 'formulariocuenta', component: FormularioCuenta, 
    title: 'Crear Cuenta'
   },
  
  
  // Redirige cualquier ruta no encontrada al Inicio (siempre debe ir al final)
  { 
    path: '**', 
    redirectTo: '' 
  }
];