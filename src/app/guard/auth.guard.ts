import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from "../service/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (route.url[0].path == 'login' || route.url[0].path == 'register') {
      if (this.auth.isLoggedIn()) {
        return this.router.parseUrl("/login");
      }
      return true;
    } else {
      if (!this.auth.isLoggedIn()) {
        return this.router.parseUrl("/login");
      }
      return true;
    }
  }

}
