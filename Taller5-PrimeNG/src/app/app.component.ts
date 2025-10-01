import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';
import { SliderModule } from 'primeng/slider';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { InputNumberModule } from 'primeng/inputnumber';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    FormsModule,
    InputTextModule,
    RadioButtonModule,
    CheckboxModule,
    SliderModule,
    AccordionModule,
    ButtonModule,
    ToastModule,
    InputNumberModule,
    CardModule,
    PasswordModule
  ],
  providers: [MessageService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'Taller5-PrimeNG';
  nombre: string = '';
  password: string = '';
  musica: string | undefined;
  hobbies: string[] = [];
  energia: number = 50;
  edad: number| null = null;

  constructor(private messageService: MessageService) { }

  guardar(){
    this.messageService.add({
      severity:'success', 
      summary: 'Formulario guardado', 
      detail: `Nombre: ${this.nombre} guardado correctamente`});
  }
}
