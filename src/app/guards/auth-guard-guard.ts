import { inject } from '@angular/core';
import { CanActivateFn, Router,  } from '@angular/router';
import { AuthService } from '../services/auth-service/auth-service';

export const authGuard: CanActivateFn = (route, state) => {/// nos da la ruta que quiere ingesar al usuario 
  //state la ruta completa 
  const servicioAuth= inject(AuthService);
  const router = inject(Router);


  if(servicioAuth.sesioniniciada()){
    
    return true;
  }
  return  router.parseUrl('/login'); //false lo protege
};
