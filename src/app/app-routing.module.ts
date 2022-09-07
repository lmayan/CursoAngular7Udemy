import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioComponent } from './components/usuario/usuario.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./components/home/home.module').then(mod => mod.HomeModule)
  },
  {
    path: 'usuario',
    loadChildren: () => import('./components/usuario/usuario.module').then(mod => mod.UsuarioModule)
  },
  { path: '', pathMatch: 'full', redirectTo: '/home' }
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {useHash:true}),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
