import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs';


@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})

export class NavigationComponent implements OnInit {
  showSidebar: boolean = false;
  expand: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    @Inject(DOCUMENT) private document: Document,
    private activatedRoute: ActivatedRoute,
  ) {
    const localStorage = this.document.defaultView?.localStorage;
  }


  
  ngOnInit() {

    this.checkRoute(); 

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.checkRoute(); 
    });
  }

  toggleSidebar() {
    console.log(this.expand)
    this.expand= !this.expand;
  }

  checkRoute() {
    let route = this.activatedRoute;
    while (route.firstChild) {
      route = route.firstChild;
    }
    route.url.subscribe(urlSegments => {
      const urlPath = urlSegments.map(segment => segment.path).join('/');
      const pattern = /\d+/; // Asegúrate de que este patrón es el correcto para tu caso
      this.showSidebar = pattern.test(urlPath);
      console.log("Current URL Path:", urlPath);
      console.log("URL matches '/dashboard/editor/:id'? ", this.showSidebar);

    });
  }
  

  logOut() {
    const localStorage = this.document.defaultView?.localStorage;
    localStorage!.removeItem('authToken');
    this.router.navigate(['/auth/login']);
  }

}
