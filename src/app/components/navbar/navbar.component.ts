import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
    sections = [
        { name: 'Home', route: '/' },
        { name: 'Contact', route: '/contact' },
    ];

    activeRoute: string = '';

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
    ) {
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.activeRoute = event.url;
            }
        });
    }

    ngOnInit(): void {
        this.activatedRoute.url.subscribe((urlSegment) => {
            this.activeRoute = urlSegment.join('/');
        });
    }
}
