import { Component, OnInit } from '@angular/core';
import { IbgeService } from '../ibge.service';

@Component({
  selector: 'app-uf',
  templateUrl: './uf.component.html',
  styleUrls: ['../ibge.component.css']
})
export class UfComponent implements OnInit {

  listaUF: any = []
  constructor(private ibgeService: IbgeService) { }

  ngOnInit(){
    this.getListUF()
  }

  getListUF(){
    this.ibgeService.getListaUF().subscribe(
      response => {
        this.listaUF = response
      }
    )
  }

  gerarListaNoConsole() {
    // Clicar 2 vezes sobre o botao pois algumas vezes o servidor do Ibge demora a responder a requisicao
    console.log(this.listaUF)
  }

}
