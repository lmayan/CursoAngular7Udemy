import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/service/usuario.service';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-usuario-cadastro',
  templateUrl: './usuario-cadastro.component.html',
  styleUrls: ['../usuario.component.css']
})
export class UsuarioCadastroComponent implements OnInit {

  public usuario = new Usuario()

  constructor(private userService : UsuarioService) {

  }

  ngOnInit(){
   
  }

  public salvarUser(){
    //alert(this.usuario.email+" - "+this.usuario.nome)
    this.userService.saveUser(this.usuario)
    this.usuario = new Usuario
  }

}
