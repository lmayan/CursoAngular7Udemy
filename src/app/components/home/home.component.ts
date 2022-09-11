import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/service/usuario.service';
import { Usuario } from 'src/app/usuario';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public usuarioHome = new Usuario
  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.usuarioHome = this.usuarioService.getUsuario()
  }

}
