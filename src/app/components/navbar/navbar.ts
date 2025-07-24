import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'],
})
export class NavbarComponent {
  botonTexto = 'Ingresar';
  botonRuta = '/login';

  constructor(private router: Router) {
    // Detecta cambios de ruta
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        const url = this.router.url;

        if (url === '/registro') {
          this.botonTexto = 'Iniciar sesión';
          this.botonRuta = '/login';
        } else if (url === '/login') {
          this.botonTexto = 'Registrarse';
          this.botonRuta = '/registro';
        } else {
          this.botonTexto = 'Ingresar';
          this.botonRuta = '/login';
        }
      });
  }
}
