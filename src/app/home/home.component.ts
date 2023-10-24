import { Component, ViewChild } from '@angular/core';
import { ModalComponent } from '../components/modal/modal.component';
import { LocalStorageRepositoryService } from '../repository/local-storage-repository.service';

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

    protected nb_task: number = 0;

    constructor(private local_storage: LocalStorageRepositoryService) {
        this.nb_task = local_storage
            .getLocalStorageRepository()
            .getAllTaches().length;
    }
}
