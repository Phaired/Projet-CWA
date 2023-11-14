import { Component, Input } from '@angular/core';
import { LocalStorageRepositoryService } from '../../repository/local-storage-repository.service';
import { Priority, Tache } from '../../model/Tache';

@Component({
    selector: 'app-create-task',
    templateUrl: './create-task.component.html',
    styleUrls: ['./create-task.component.css'],
})
export class CreateTaskComponent {
    @Input() task_list: Tache[] = [];
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
            this.name.length >= 3 &&
            this.date !== null &&
            this.description.length >= 10
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
            let new_list: Tache[] = this.localStorageRepositoryService
                .getLocalStorageRepository()
                .getAllTaches();
            new_list.map((tache) => {
                let index: number = this.task_list.findIndex(
                    (item: Tache) => item.id === tache.id,
                );
                if (index === -1) {
                    this.task_list.push(tache);
                }
            });
            console.log('Update de la task list passée en paramètre');
            this.name = '';
            this.priority = 0;
            this.description = '';
            this.color = Tache.colorToPriority(Priority.BASE);
            this.date = null;
            return true;
        }
        return false;
    }

    colorToPriority(priority: Priority): string {
        return Tache.colorToPriority(priority);
    }
}
