import { Component, ViewChild } from '@angular/core';
import { ModalComponent } from '../components/modal/modal.component';
import { LocalStorageRepositoryService } from '../repository/local-storage-repository.service';
import { Tache } from '../model/Tache';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent {
    @ViewChild(ModalComponent, { static: false }) modalComponent:
        | ModalComponent
        | undefined;

    selectedStatut: string = 'all';
    selectedPriority: string = 'all';
    selectedSort: string = 'none';

    openModal() {
        this.modalComponent?.openModal();
    }

    protected nb_task: number = 0; // Nombre de tâches

    protected tasks_list: Tache[] = []; // Liste des tâches

    constructor(private local_storage: LocalStorageRepositoryService) {
        // this.local_storage
        //     .getLocalStorageRepository()
        //     .saveTache(this.createRandomTache());

        this.tasks_list = local_storage
            .getLocalStorageRepository()
            .getAllTaches();

        this.nb_task = local_storage
            .getLocalStorageRepository()
            .getAllTaches().length;
    }

    /**
     * @brief Fonction qui permet de filtrer les tâches en fonction de la valeur sélectionnée dans le select de statut
     * @param selectedValue
     */
    onSelectChangeStatut(selectedValue: string) {}

    /**
     * @brief Fonction qui permet de filtrer les tâches en fonction de la valeur sélectionnée dans le select de priorité
     * @param selectedValue
     */
    onSelectChangePriority(selectedValue: string) {
        switch (selectedValue) {
            case 'all':
                break;
            case 'weak':
                break;
            case 'high':
                break;
        }
    }

    /**
     * @brief Fonction qui permet de trier les tâches en fonction de la valeur sélectionnée dans le select de
     * @param selectedValue
     */
    onSelectChangeSort(selectedValue: string) {
        switch (selectedValue) {
            case 'none':
                break;
            case 'priority':
                break;
            case 'date':
                break;
            default:
                break;
        }
    }

    createRandomTache(): Tache {
        const id = Math.floor(Math.random() * 10000);
        const intitule = `Task ${id}`;
        const date_creation = new Date();
        const date_fin = new Date();
        date_fin.setDate(
            date_creation.getDate() + Math.floor(Math.random() * 1000),
        );
        const description = `Description for Task ${id}`;
        const priority = Math.floor(Math.random() * 3) + 1;
        const is_terminate = Math.random() < 0.5;
        const color = Tache.colorToPriority(priority);

        return new Tache(
            id,
            intitule,
            date_creation,
            date_fin,
            description,
            priority,
            is_terminate,
            color,
        );
    }
}
