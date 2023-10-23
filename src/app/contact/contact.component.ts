import { Component } from '@angular/core';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
    ContactList = [
        { name: 'Yoan DUSOLEIL', github: 'https://github.com/Yaon-C2H8N2' },
        { name: 'Rémy BARRANCO', github: 'https://github.com/Phaired' },
        { name: 'Maxime COLLIAT', github: 'https://github.com/Maxime-Cllt' },
        { name: 'Rahman YILMAZ', github: 'https://github.com/Sudo-Rahman' },
        { name: 'Betul SENER', github: 'https://github.com/BetulDSENER' },
        { name: 'Julie PRIGENT', github: 'https://github.com/JuliePrigent' },
    ];
}
