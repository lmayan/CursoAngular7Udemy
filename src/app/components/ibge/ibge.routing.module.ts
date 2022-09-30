import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IbgeComponent } from './ibge.component';
import { UfComponent } from './uf/uf.component';
import { RegiaoComponent } from './regiao/regiao.component';

const routes: Routes = [
  {
    path: '',
    component: IbgeComponent
  },
  {
    path: 'uf',
    component: UfComponent
  }, 
  {
    path: 'regiao',
    component: RegiaoComponent
  },
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
  ],
  exports: [RouterModule]
})
export class IbgeRoutingModule { }
