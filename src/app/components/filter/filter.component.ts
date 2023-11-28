import { Component, Input } from '@angular/core';
import { Tache } from '../../model/Tache';

@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.css'],
})
export class FilterComponent {
    @Input() task_list: Tache[] = [
        new Tache(1337, 'test', new Date(), new Date(), 'todo', 1, false, ''),
    ];

    constructor() {}

    updateFilter(
        orderBy: string,
        status: string,
        priority: string,
        order: number,
    ) {
        this.filterByStatus(status);
        this.filterByPriority(priority);
        this.orderBy(orderBy, order);
        console.log(this.task_list);
    }

    /**
     * Ordonne la liste des tâches en fonction du type d'ordre et de l'ordre
     * @param orderType
     * @param order
     * @private
     */
    private orderBy(orderType: string, order: number) {
        switch (orderType) {
            case 'date': {
                this.task_list.sort((a: Tache, b: Tache) => {
                    const dateA = new Date(a.date_fin);
                    const dateB = new Date(b.date_fin);
                    return (dateA.getTime() - dateB.getTime()) * order;
                });
                break;
            }
            case 'priority': {
                this.task_list.sort((a: Tache, b: Tache) => {
                    return (a.priority - b.priority) * order;
                });
                break;
            }
            default: {
                this.task_list.sort((a: Tache, b: Tache) => {
                    return (a.id - b.id) * order;
                });
                break;
            }
        }
    }

    /**
     * Filtre la liste des tâches en fonction du status
     * @param status
     * @private
     */
    private filterByStatus(status: string) {
        switch (status) {
            case 'on': {
                let new_list = this.task_list.filter(
                    (tache) => !tache.is_terminate,
                );
                this.task_list.splice(0, this.task_list.length); // Clear la liste
                new_list.map((tache) => this.task_list.push(tache));
                break;
            }
            case 'finished': {
                let new_list = this.task_list.filter(
                    (tache) => tache.is_terminate,
                );
                this.task_list.splice(0, this.task_list.length); // Clear la liste
                new_list.map((tache) => this.task_list.push(tache));
                break;
            }
            default: {
                break;
            }
        }
    }

    /**
     * Filtre la liste des tâches en fonction de la priorité
     * @param priority
     * @private
     */
    private filterByPriority(priority: string) {
        switch (priority) {
            case 'weak': {
                let new_list = this.task_list.filter(
                    (tache) => tache.priority === 1,
                );
                this.task_list.splice(0, this.task_list.length); // Clear la liste
                new_list.map((tache) => this.task_list.push(tache));
                break;
            }
            case 'medium': {
                let new_list = this.task_list.filter(
                    (tache) => tache.priority === 2,
                );
                this.task_list.splice(0, this.task_list.length); // Clear la liste
                new_list.map((tache) => this.task_list.push(tache));
                break;
            }
            case 'high': {
                let new_list = this.task_list.filter(
                    (tache) => tache.priority === 3,
                );
                this.task_list.splice(0, this.task_list.length); // Clear la liste
                new_list.map((tache) => this.task_list.push(tache));
                break;
            }
            default: {
                break;
            }
        }
    }
}
