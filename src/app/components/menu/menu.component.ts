import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items: MenuItem[] = []

  ngOnInit(): void {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        routerLink: 'home',
      },
      {
        label: 'Usuario',
        icon: 'pi pi-fw pi-pencil',
        routerLink: 'usuario',
      },
      {
        label: 'IBGE',
        icon: 'pi pi-fw pi-pencil',
        items: [
          { label: 'Listar UF', icon: 'pi pi-fw pi-trash', routerLink:'ibge/uf' },
          { label: 'Listar Regiões', icon: 'pi pi-fw pi-refresh', routerLink:'ibge/regiao' }
        ]
      }
    ];
  }

}
