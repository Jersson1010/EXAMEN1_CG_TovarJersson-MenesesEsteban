import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ImageModule } from 'primeng/image';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-header',
  imports: [
    ImageModule, 
    InputTextModule,
    FloatLabelModule, 
    FormsModule, 
    ButtonModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  value: string = '';
}
