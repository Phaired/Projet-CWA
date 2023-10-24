import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
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
}
