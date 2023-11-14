import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tache } from '../../model/Tache';
import { LocalStorageRepositoryService } from '../../repository/local-storage-repository.service';

@Component({
    selector: 'app-modify-task',
    templateUrl: './modify-task.component.html',
    styleUrls: ['./modify-task.component.css'],
})
export class ModifyTaskComponent {
    @Input() tache: Tache = new Tache(
        1,
        'test',
        new Date(),
        new Date(),
        'test',
        1,
        false,
        'red',
    );
    @Output() onConfirm: EventEmitter<number> = new EventEmitter<number>();

    constructor(
        private localStorageRepositoryService: LocalStorageRepositoryService,
    ) {}

    modifyTask(): boolean {
        if (
            this.tache.description.length > 10 &&
            this.tache.intitule.length > 3
        ) {
            this.localStorageRepositoryService
                .getLocalStorageRepository()
                .updateTacheById(this.tache.id, this.tache);
            this.onConfirm.emit(0);
            return true;
        }
        return false;
    }

    colorToPriority(priority: number): string {
        return Tache.colorToPriority(priority);
    }
}
