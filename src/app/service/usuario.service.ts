import { Injectable } from '@angular/core';
import { Usuario } from '../usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  public getUsuario(): Usuario{
    let u = new Usuario
    u.nome="USUARIO1"
    u.email="usuario1@gmail.com"
    return u
  }

  public listarUsuarios():Usuario[]{
    return[
      {
        nome:"Usuario0",
        email:"usuario0@gmail.com"
      },
      {
        nome:"Usuario1",
        email:"usuario1@gmail.com"
      },
      {
        nome:"Usuario2",
        email:"usuario2@gmail.com"
      }
    ]
  }
}
