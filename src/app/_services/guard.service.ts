import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authService.user) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
