import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class DragStateService {
    private draggingSource = new BehaviorSubject<boolean>(false);

    // Observable boolean stream
    dragging$ = this.draggingSource.asObservable();

    // Service message commands
    startDragging() {
        this.draggingSource.next(true);
    }

    stopDragging() {
        this.draggingSource.next(false);
    }
}
