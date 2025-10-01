import { Component } from '@angular/core';
import { HeaderComponent } from '../home/header/header.component';
import { MenubarComponent } from '../home/menubar/menubar.component';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { Ripple } from 'primeng/ripple';
import { FooterComponent } from "../home/footer/footer.component";

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    HeaderComponent,
    MenubarComponent,
    ButtonModule,
    ToastModule,
    Ripple,
    FooterComponent
],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
  providers: [MessageService]
})
export class DetailsComponent {
 constructor(private messageService: MessageService) {}

    showSuccess() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
    }

    showInfo() {
        this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Message Content' });
    }

    showWarn() {
        this.messageService.add({ severity: 'warn', summary: 'Warn', detail: 'Message Content' });
    }

    showError() {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Message Content' });
    }

    showContrast() {
        this.messageService.add({ severity: 'contrast', summary: 'Error', detail: 'Message Content' });
    }

    showSecondary() {
        this.messageService.add({ severity: 'secondary', summary: 'Secondary', detail: 'Message Content' });
    }
}
