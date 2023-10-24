import { Component } from '@angular/core';
import { LocalStorageRepositoryService } from '../repository/local-storage-repository.service';
import { Tache, Priority } from '../model/Tache';

@Component({
    selector: 'app-create-task',
    templateUrl: './create-task.component.html',
    styleUrls: ['./create-task.component.css'],
})
export class CreateTaskComponent {
    name: string = '';
    description: string = '';
    color: string = Tache.colorToPriority(Priority.BASE);
    priority: number = Priority.BASE;
    date: Date | null = null;

    constructor(
        private localStorageRepositoryService: LocalStorageRepositoryService,
    ) {}

    createTask(): boolean {
        if (
            this.name.length > 3 &&
            this.date !== null &&
            this.description.length > 10
        ) {
            const task = new Tache(
                this.localStorageRepositoryService
                    .getLocalStorageRepository()
                    .getLastId() + 1,
                this.name,
                new Date(),
                this.date,
                this.description,
                this.priority,
                false,
                this.color,
            );
            this.localStorageRepositoryService
                .getLocalStorageRepository()
                .saveTache(task);
            this.name = '';
            this.priority = 0;
            this.description = '';
            this.color = Tache.colorToPriority(Priority.BASE);
            this.date = null;
            // return true;
        }
        console.log(
            this.localStorageRepositoryService
                .getLocalStorageRepository()
                .getAllTaches(),
        );
        return false;
    }
    colorToPriority(priority: Priority): string {
        return Tache.colorToPriority(priority);
    }
}
