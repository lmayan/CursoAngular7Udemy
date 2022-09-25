import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  public usuario = new Usuario
  public usuarios:Usuario[]=[]
  public text: String = ""
  public clicouNoBotaoText: boolean = false
  
  constructor(private usuarioService:UsuarioService) {

  }

  ngOnInit(){
    this.usuario = this.usuarioService.getUsuario()
    this.usuarios = this.usuarioService.listarUsuarios()
    // this.usuarios.push(this.usuario) - Comando para add em uma array TS
  }

  clickTransfDadosTelaParaObjetoNoComponent(){
    if (this.clicouNoBotaoText == true) {
      this.text="Voce Ja Clicou no Botao, recarregue a pagina!"
    } else {
      this.text="Voce Clicou no Botao, agora o objeto [text] no componente possui esse texto"
      this.clicouNoBotaoText = true
    }

  }

}
