import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './services/user.service';

export const authGuard = () => {
  const usuarioService = inject(UserService);
  const router = inject(Router);

  if (usuarioService.estaLogado()) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
