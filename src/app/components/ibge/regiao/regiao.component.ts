import { Component, OnInit } from '@angular/core';
import { IbgeService } from '../../../service/ibge.service';

@Component({
  selector: 'app-regiao',
  templateUrl: './regiao.component.html',
})
export class RegiaoComponent implements OnInit {

  cols: any[]=[]
  listaRegiao: any[] = []
  constructor(private ibgeService: IbgeService) { }

  ngOnInit(){
    this.getListRegiao()

    this.cols = [
      { field: 'id', header: 'ID' },
      { field: 'sigla', header: 'Sigla' },
      { field: 'nome', header: 'Nome' }
    ];

  }

  getListRegiao() {
    this.ibgeService.getListaRegiao().subscribe(
      response => {
        this.listaRegiao = response
      }
    )
  }

}
