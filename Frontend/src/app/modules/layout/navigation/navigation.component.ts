import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {

  constructor( private router: Router, @Inject(DOCUMENT) private document: Document){
    const localStorage = this.document.defaultView?.localStorage;
  }

  logOut() {
    localStorage.removeItem('authToken');
    this.router.navigate(['/auth/login']);
  }

}
