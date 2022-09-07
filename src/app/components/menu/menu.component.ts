import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public texto = ""
  constructor() { }

  ngOnInit(): void {
    this.texto="Conteudo variavel (texto)"
  }

  clicou(){
    this.texto="Executou CLICK!"
  }

}
