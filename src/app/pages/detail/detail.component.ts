import { Component, Input } from '@angular/core';
import { Tache } from '../../model/Tache';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.css'],
})
export class DetailComponent {
    @Input() task: Tache | undefined;
    constructor() {
        console.log(this.task);
    }
}
