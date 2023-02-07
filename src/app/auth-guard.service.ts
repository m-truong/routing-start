import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from "@angular/router";
import { Observable } from 'rxjs/Observable';

// CanActivate can run synchronously or asynchronously

export class AuthGuard implements CanActivate {
  // Note: This is run before the route gets activated
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

  }
}