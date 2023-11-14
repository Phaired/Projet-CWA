import {
    Component,
    EventEmitter,
    Input,
    Output,
    ViewChild,
} from '@angular/core';
import { Tache } from '../../model/Tache';
import { LocalStorageRepositoryService } from '../../repository/local-storage-repository.service';
import { ModalComponent } from '../modal/modal.component';

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
    @Output() getTaskDetails: EventEmitter<Tache> = new EventEmitter<Tache>();

    @ViewChild('taskDetailModal', { static: true })
    detailModal!: ModalComponent;

    @ViewChild('taskModifyModal', { static: true })
    taskModifyModal!: ModalComponent;

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
        this.taskModifyModal.openModal();
        console.log('edit task' + this.task.id);
    }

    deleteTask() {
        this.local_storage.getLocalStorageRepository().deleteTache(this.task);
        console.log('delete task' + this.task.id);
    }

    getBoxShadowColor(taskColor: string): string {
        return `0 0 10px ${taskColor}`;
    }

    completeTask() {
        this.task.is_terminate = !this.task.is_terminate;
        this.local_storage
            .getLocalStorageRepository()
            .updateTacheById(this.task.id, this.task);
    }

    openDetailModal() {
        this.detailModal.openModal();
    }

    formatDate(dateToConvert: Date): string {
        const date = new Date(dateToConvert);
        const hours = date.getUTCHours().toString().padStart(2, '0');
        const minutes = date.getUTCMinutes().toString().padStart(2, '0');
        const seconds = date.getUTCSeconds().toString().padStart(2, '0');
        const day = date.getUTCDate().toString().padStart(2, '0');
        const month = (date.getUTCMonth() + 1).toString().padStart(2, '0'); // Month is 0-indexed
        const year = date.getUTCFullYear().toString();
        return `${day}/${month}/${year} à ${hours}:${minutes}`;
    }

    getColorForTask(task: Tache) {
        return task.is_terminate ? '#889388' : task.color;
    }
}
