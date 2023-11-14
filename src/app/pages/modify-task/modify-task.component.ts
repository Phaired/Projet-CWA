import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tache } from '../../model/Tache';
import { LocalStorageRepositoryService } from '../../repository/local-storage-repository.service';

@Component({
    selector: 'app-modify-task',
    templateUrl: './modify-task.component.html',
    styleUrls: ['./modify-task.component.css'],
})
export class ModifyTaskComponent implements OnInit {
    @Input() tacheToModify: Tache = new Tache(
        1,
        'test',
        new Date(),
        new Date(),
        'test',
        1,
        false,
        'red',
    );
    tache: Tache = Tache.fromTache(this.tacheToModify);
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

            //update des infos de la tâche, c'est pas ouf mais c'est le plus simple à faire sans refaire tout le code
            this.tacheToModify.id = this.tache.id;
            this.tacheToModify.intitule = this.tache.intitule;
            this.tacheToModify.date_creation = this.tache.date_creation;
            this.tacheToModify.date_fin = this.tache.date_fin;
            this.tacheToModify.description = this.tache.description;
            this.tacheToModify.priority = this.tache.priority;
            this.tacheToModify.is_terminate = this.tache.is_terminate;
            this.tacheToModify.color = this.tache.color;

            this.onConfirm.emit(0);
            return true;
        }
        return false;
    }

    ngOnInit() {
        this.tache = Tache.fromTache(this.tacheToModify);
    }

    colorToPriority(priority: number): string {
        return Tache.colorToPriority(priority);
    }
}
