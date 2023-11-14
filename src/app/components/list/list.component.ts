import { Component, Input } from '@angular/core';
import { LocalStorageRepositoryService } from '../../repository/local-storage-repository.service';
import { animate, style, transition, trigger } from '@angular/animations';
import { Tache } from '../../model/Tache';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css'],
    animations: [
        trigger('slideAnimation', [
            transition('* => left', [
                style({ transform: 'translateX(-100%)', opacity: 0 }),
                animate(
                    '0.5s ease-in-out',
                    style({ transform: 'translateX(0)', opacity: 1 }),
                ),
            ]),
            transition('* => right', [
                style({ transform: 'translateX(100%)', opacity: 0 }),
                animate(
                    '0.5s ease-in-out',
                    style({ transform: 'translateX(0)', opacity: 1 }),
                ),
            ]),
        ]),
    ],
})
export class ListComponent {
    // protected task_list: Tache[];
    protected maxPage: number;

    protected itemsPerPage: number = 12;
    protected currentPage: number = 1;

    @Input() task_list: Tache[] = [];

    constructor() {
        this.maxPage = Math.ceil(this.task_list.length / this.itemsPerPage);
        if (this.maxPage === 0) {
            this.maxPage = 1;
        }
    }

    get TotalPages(): number {
        this.maxPage = Math.ceil(this.task_list.length / this.itemsPerPage);
        if (this.maxPage === 0) {
            this.maxPage = 1;
        }
        return this.maxPage;
    }

    get paginatedTasks(): any[] {
        const startIndex = (this.currentPage - 1) * this.itemsPerPage;
        return this.task_list.slice(startIndex, startIndex + this.itemsPerPage);
    }

    pageChanged(newPage: number): void {
        this.currentPage = newPage;
    }

    deleteTask(id: number) {
        const index = this.task_list.findIndex((tache) => tache.id === id);
        this.task_list.splice(index, 1);
    }

    get startIndex(): number {
        return (this.currentPage - 1) * this.itemsPerPage;
    }

    get endIndex(): number {
        return this.startIndex + this.itemsPerPage;
    }

    slideDirection: string = '';

    previousPage(): void {
        if (this.currentPage > 1) {
            this.slideDirection = 'left';
            this.currentPage--;
        }
    }

    nextPage(): void {
        if (this.endIndex < this.task_list.length) {
            this.slideDirection = 'right';
            this.currentPage++;
        }
    }
}
