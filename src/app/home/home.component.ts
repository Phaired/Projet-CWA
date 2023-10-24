import { Component, ViewChild } from '@angular/core';
import { ModalComponent } from '../components/modal/modal.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent {
    @ViewChild(ModalComponent, { static: false }) modalComponent:
        | ModalComponent
        | undefined;

    openModal() {
        this.modalComponent?.openModal();
    }
}
