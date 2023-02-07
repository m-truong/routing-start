import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from "@angular/router";
import { Observable } from 'rxjs/Observable';
import { AuthService } from "./auth.service";

// CanActivate can run synchronously or asynchronously

@Injectable()
export class AuthGuard implements CanActivate {

constructor(private authService: AuthService) {}
  // Note: This is run before the route gets activated
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

  }
}