import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public usuarios: Usuario[] = []

  constructor() { }

  public listarUsuarios(): Usuario[] {
    return this.usuarios
  }

  public saveUser(user: Usuario) {
    this.usuarios.push(user)
    console.log(this.usuarios)
  }
}
