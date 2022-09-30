import { Component, OnInit } from '@angular/core';
import { IbgeService } from '../ibge.service';

@Component({
  selector: 'app-regiao',
  templateUrl: './regiao.component.html',
})
export class RegiaoComponent implements OnInit {

  listaRegiao: any[] = []
  constructor(private ibgeService: IbgeService) { }

  ngOnInit(){
    this.getListRegiao()
  }

  getListRegiao() {
    this.ibgeService.getListaRegiao().subscribe(
      response => {
        this.listaRegiao = response
      }
    )
  }

}
