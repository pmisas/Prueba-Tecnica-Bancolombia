import { DOCUMENT } from "@angular/common";
import { Inject, Injectable } from "@angular/core";
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    
    constructor(private router: Router, @Inject(DOCUMENT) private document: Document) {
        const localStorage = this.document.defaultView?.localStorage;
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        
        const isLogged = localStorage.getItem('authToken'); 

        if (!isLogged) {
            this.router.navigate(['/auth/login']);
            return false;
        } else {
            return true;
        }
       
    }
}
