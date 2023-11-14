import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-delete-task',
    templateUrl: './delete-task.component.html',
    styleUrls: ['./delete-task.component.css'],
})
export class DeleteTaskComponent {
    @Output() onConfirm: EventEmitter<number> = new EventEmitter<number>();
}
