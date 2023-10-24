import { Component, Input } from '@angular/core';
import { Tache } from '../../model/Tache';
import { LocalStorageRepositoryService } from '../../repository/local-storage-repository.service';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
})
export class CardComponent {
    @Input() task: Tache = new Tache(
        1,
        'test',
        new Date(),
        new Date(),
        'test',
        1,
        false,
        'red',
    );

    constructor(private local_storage: LocalStorageRepositoryService) {}

    getTask() {
        return this.task;
    }

    /**
     * Récupère la date formatée (jj/mm/aaaa) d'une tâche (date de création ou de modification) et la retourne sous forme de chaîne de caractères (string)
     * @param date - Date de création ou de modification d'une tâche (format ISO) (ex: 2021-01-01T00:00:00.000Z)
     */
    getFormattedDate(date: string) {
        const day = new Date(date).getDate().toString().padStart(2, '0');
        const month = (new Date(date).getMonth() + 1)
            .toString()
            .padStart(2, '0');
        const year = new Date(date).getFullYear();
        return `${day}/${month}/${year}`;
    }

    editTask() {
        console.log('edit task');
    }

    deleteTask() {
        console.log('delete task');
    }
    completeTask() {
        this.task.is_terminate = !this.task.is_terminate;
        this.local_storage
            .getLocalStorageRepository()
            .updateTacheById(this.task.id, this.task);
    }
}
