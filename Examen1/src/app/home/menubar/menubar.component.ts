import { Component } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menubar',
  imports: [MenubarModule],
  templateUrl: './menubar.component.html',
  styleUrl: './menubar.component.css'
})
export class MenubarComponent {

  items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                label: 'Inicio',
                icon: 'pi pi-home',
                routerLink: '/home'
            },
            {
                label: 'Características',
                icon: 'pi pi-star'
            },
            {
                label: 'Proyectos',
                icon: 'pi pi-search',
                items: [
                    {
                        label: 'Desarrollo de software a la medida',
                        icon: 'pi pi-bolt'
                    },
                    {
                        label: 'Desarrollo movil',
                        icon: 'pi pi-server'
                    },
                    {
                        label: 'Soporte a aplicaciones',
                        icon: 'pi pi-pencil'
                    }
                ]
            },
            {
                label: 'Contacto',
                icon: 'pi pi-envelope'
            }
        ]
    }
  }
