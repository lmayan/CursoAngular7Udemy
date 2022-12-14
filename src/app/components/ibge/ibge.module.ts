import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IbgeComponent } from './ibge.component';
import { IbgeRoutingModule } from './ibge.routing.module';
import { UfComponent } from './uf/uf.component';
import { RegiaoComponent } from './regiao/regiao.component';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';


@NgModule({
  declarations: [
    IbgeComponent,
    UfComponent,
    RegiaoComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    IbgeRoutingModule
  ]
})
export class IbgeModule { }
