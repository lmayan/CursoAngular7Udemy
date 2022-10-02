import { Component, OnInit } from '@angular/core';
import { IbgeService } from '../../../service/ibge.service';

@Component({
  selector: 'app-uf',
  templateUrl: './uf.component.html',
  styleUrls: ['../ibge.component.css']
})
export class UfComponent implements OnInit {

  cols: any[] = [];
  listaUF: any = []
  constructor(private ibgeService: IbgeService) { }

  ngOnInit() {
    this.getListUF()

    this.cols = [
      { field: 'id', header: 'ID' },
      { field: 'sigla', header: 'Sigla' },
      { field: 'nome', header: 'Nome' }
    ];

  }

  getListUF() {
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
