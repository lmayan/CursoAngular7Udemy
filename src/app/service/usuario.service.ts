import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public usuarios: Usuario [] = []

  constructor() { }

  public getUsuario(): Usuario{
    let u = new Usuario
    u.nome="USUARIO1"
    u.email="usuario1@gmail.com"
    return u
  }

  public listarUsuarios():Usuario[]{
    // return [
    //   {
    //     nome: "User0",
    //     email: "email0"
    //   },
    //    {
    //     nome: "User1",
    //     email: "email1"
    //   },
    //   {
    //     nome: "User2",
    //     email: "email2"
    //   }
    // ]
    return this.usuarios
  }

  public saveUser(user: Usuario){
    this.usuarios.push(user)
    console.log(this.usuarios)
  }
}
