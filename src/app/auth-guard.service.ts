import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from 'rxjs/Observable';
import { AuthService } from "./auth.service";

// CanActivate can run synchronously or asynchronously

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

constructor(private authService: AuthService, private router: Router) {}
  // Note: This is run before the route gets activated
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.isAuthenticated()
      .then(
        (authenticated: boolean) => {
          if (authenticated) {
            return true; 
          } else {
            this.router.navigate(['/']);
          }
        }
      );
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(route, state);
  }
}