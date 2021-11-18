import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  //canActivate for admin
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.auth.isLoggedIn()) {
      //this.router.navigate(['dashboard'],{queryParams: {returnUrl: state.url}});
      return true;
    }
    this.router.navigate(['dashboard'], {
      queryParams: { returnUrl: state.url },
    });
    return false;
  }
}
