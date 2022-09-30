import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IbgeService {

  urlMain = 'https://servicodados.ibge.gov.br/api/v1/localidades'
  consultUF = this.urlMain + '/estados/'
  consultRegioes = this.urlMain + "/regioes/"

  constructor(private http: HttpClient) { }

  getListaUF(): Observable<any[]> {
    return this.http.get<any[]>(this.consultUF)
  }

  getListaRegiao(): Observable<any[]> {
    return this.http.get<any[]>(this.consultRegioes)
  }


}
