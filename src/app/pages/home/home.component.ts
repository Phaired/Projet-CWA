import { Component, ViewChild } from '@angular/core';
import { ModalComponent } from '../../components/modal/modal.component';
import { LocalStorageRepositoryService } from '../../repository/local-storage-repository.service';
import { Tache } from '../../model/Tache';
import { FilterComponent } from '../../components/filter/filter.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent {
    @ViewChild('createTask', { static: false }) createTaskModal:
        | ModalComponent
        | undefined;
    @ViewChild(FilterComponent, { static: false }) filterComponent:
        | FilterComponent
        | undefined;

    selectedStatut: string = 'all';
    selectedPriority: string = 'all';
    selectedSort: string = 'none';

    openModal() {
        this.createTaskModal?.openModal();
    }

    protected tasks_list: Tache[] = []; // Liste des tâches

    constructor(private local_storage: LocalStorageRepositoryService) {
        // this.local_storage
        //     .getLocalStorageRepository()
        //     .saveTache(this.createRandomTache());

        this.tasks_list = local_storage
            .getLocalStorageRepository()
            .getAllTaches();
    }

    onSelectChange(selectedValue: string, select: string) {
        let listTaskTemp = this.local_storage
            .getLocalStorageRepository()
            .getAllTaches();
        this.tasks_list.splice(0, this.tasks_list.length);
        listTaskTemp.map((tache) => this.tasks_list.push(tache));
        switch (select) {
            case 'statut':
                this.onSelectChangeStatut(selectedValue);
                break;
            case 'priority':
                this.onSelectChangePriority(selectedValue);
                break;
            case 'sort':
                this.onSelectChangeSort(selectedValue);
                break;
            default:
                break;
        }
    }

    /**
     * @brief Fonction qui permet de filtrer les tâches en fonction de la valeur sélectionnée dans le select de statut
     * @param selectedValue
     */
    private onSelectChangeStatut(selectedValue: string) {
        this.filterComponent?.updateFilter(
            this.selectedSort,
            selectedValue,
            this.selectedPriority,
            1,
        );
    }

    /**
     * @brief Fonction qui permet de filtrer les tâches en fonction de la valeur sélectionnée dans le select de priorité
     * @param selectedValue
     */
    private onSelectChangePriority(selectedValue: string) {
        switch (selectedValue) {
            case 'all':
                break;
            case 'weak':
                break;
            case 'high':
                break;
        }
        this.filterComponent?.updateFilter(
            this.selectedSort,
            this.selectedStatut,
            selectedValue,
            1,
        );
    }

    /**
     * @brief Fonction qui permet de trier les tâches en fonction de la valeur sélectionnée dans le select de
     * @param selectedValue
     */
    private onSelectChangeSort(selectedValue: string) {
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
        this.filterComponent?.updateFilter(
            selectedValue,
            this.selectedStatut,
            this.selectedPriority,
            1,
        );
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
