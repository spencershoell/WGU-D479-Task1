import { Component, HostListener } from '@angular/core';
import { NgClass } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { icon } from '@fortawesome/fontawesome-svg-core';
import { faBedFront, faCarpool, faForkKnife, faHome, faLandmark, faLighthouse, faMountains, faQuestion, faStore, faTreePalm, faUmbrellaBeach, faVolcano } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
    selector: 'app-navbar',
    imports: [RouterLink, NgClass, FontAwesomeModule],
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
    fasHome = icon(faHome);

    fasUmbrellaBeach = icon(faUmbrellaBeach);
    fasLighthouse = icon(faLighthouse);
    fasMountains = icon(faMountains);
    fasTreePalm = icon(faTreePalm);
    fasLandmark = icon(faLandmark);
    fasVolcano = icon(faVolcano);

    fasBedFront = icon(faBedFront);
    fasStore = icon(faStore);
    fasForkKnife = icon(faForkKnife);
    fasCarpool = icon(faCarpool);
    fasQuestion = icon(faQuestion);

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