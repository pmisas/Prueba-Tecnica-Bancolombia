import { DOCUMENT } from "@angular/common";
import { Inject, Injectable } from "@angular/core";
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class LoginRedirectGuard implements CanActivate {
    constructor(private router: Router, @Inject(DOCUMENT) private document: Document) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        // Verifica si estamos en un entorno de navegador
        const isBrowser = typeof window !== 'undefined' && this.document.defaultView?.localStorage;

        if (isBrowser) {
            const isLogged = this.document.defaultView!.localStorage.getItem('authToken');

            if (isLogged) {
                this.router.navigate(['/dashboard']);
                return false; // Redirige al dashboard si ya está autenticado
            }
        }

        return true; // Permite el acceso si no hay un token
    }
}
