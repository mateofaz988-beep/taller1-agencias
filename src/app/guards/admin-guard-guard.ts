import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';
import { AuthService } from '../services/auth-service/auth-service';


export const adminGuard: CanMatchFn = () => {

  const auth = inject(AuthService);
  const router = inject(Router);

  if (auth.esAdmin()) {
    return true;
  }

  router.navigate(['/']);
  return false;
};