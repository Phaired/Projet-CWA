import { Component } from '@angular/core';
import { LocalStorageRepositoryService } from '../repository/local-storage-repository.service';
import { Tache } from '../model/Tache';

@Component({
    selector: 'app-create-task',
    templateUrl: './create-task.component.html',
    styleUrls: ['./create-task.component.css'],
})
export class CreateTaskComponent {
    name: string = '';
    priority: number = 0;
    date: Date | null = null;

    constructor(
        private localStorageRepositoryService: LocalStorageRepositoryService,
    ) {}

    createTask(): boolean {
        if (this.name.length > 3 && this.date !== null) {
            const task = new Tache(
                this.name,
                new Date(),
                this.date,
                '',
                this.priority,
                false,
            );
            this.localStorageRepositoryService
                .getLocalStorageRepository()
                .saveTache(task);
            this.name = '';
            this.priority = 0;
            this.date = null;
            return true;
        }
        return false;
    }
}
