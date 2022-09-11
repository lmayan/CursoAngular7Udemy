import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/service/usuario.service';
import { Usuario } from 'src/app/usuario';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  public usuario = new Usuario
  constructor(private usuarioService:UsuarioService) {
    
  }

  ngOnInit(){
    this.usuario=this.usuarioService.getUsuario()
  }

}
