import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioComponent } from './usuario.component';
import { UsuarioCadastroComponent } from './cadastro/usuario.cadastro.component';

const routes: Routes = [
  {
    path: '',
    component: UsuarioComponent
  },
  {
    path: 'add',
    component: UsuarioCadastroComponent
  }
    
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
