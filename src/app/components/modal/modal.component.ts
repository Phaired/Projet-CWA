import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Tache } from '../../model/Tache';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
    @Input() task: Tache | undefined;
    @ViewChild('modalDialog') modalDialog:
        | ElementRef<HTMLDialogElement>
        | undefined;
    constructor() {}

    ngOnInit() {}

    openModal() {
        if (this.modalDialog && this.modalDialog.nativeElement) {
            this.modalDialog.nativeElement.showModal();
        }
    }

    closeModal() {
        if (this.modalDialog && this.modalDialog.nativeElement) {
            this.modalDialog.nativeElement.close();
        }
    }

    openModalTask(task: Tache) {
        this.task = task;

        if (this.modalDialog && this.modalDialog.nativeElement) {
            this.modalDialog.nativeElement.showModal();
        }
    }
}
