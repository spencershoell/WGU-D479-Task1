import { Component, HostListener } from '@angular/core';
import { NgClass } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
    selector: 'app-navbar',
    imports: [RouterLink, NgClass],
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

    constructor(
        private router: Router
    ) { }

    // Navbar Sticky
    isSticky: boolean = false;
    @HostListener('window:scroll', ['$event'])
    checkScroll() {
        const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (scrollPosition >= 50) {
            this.isSticky = true;
        } else {
            this.isSticky = false;
        }
    }

    public onClick(link: string): void {
        this.router.navigate([link]);
    }

    classApplied = false;
    toggleClass() {
        this.classApplied = !this.classApplied;
    }

}