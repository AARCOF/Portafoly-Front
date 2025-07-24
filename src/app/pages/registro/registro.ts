import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './registro.html',
  styleUrl: './registro.css',
})
export class Registro {
  usuario: any = {
    nombre: '',
    apellidos: '',
    email: '',
    contraseña: '',
    celular: '',
    profesion: '',
    fechaNacimiento: '',
  };

  constructor(private http: HttpClient) {}

  registrar() {
    const formData = new FormData();
    formData.append('nombre', this.usuario.nombre);
    formData.append('apellidos', this.usuario.apellidos);
    formData.append('email', this.usuario.email);
    formData.append('contraseña', this.usuario.contrasenia);
    formData.append('celular', this.usuario.celular);
    formData.append('profesion', this.usuario.profesion);
    formData.append('fechaNacimiento', this.usuario.fechaNacimiento);

    this.http
      .post('http://localhost:8080/usuario/registro', formData)
      .subscribe({
        next: (res) =>
          alert(
            '¡Registro exitoso! Revisa tu correo para confirmar la cuenta.'
          ),
        error: (err) =>
          alert('Error: ' + (err.error?.message || 'Intenta nuevamente.')),
      });
  }
}
