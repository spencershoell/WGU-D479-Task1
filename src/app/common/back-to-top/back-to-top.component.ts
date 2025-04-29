import { NgIf } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core';
import { faChevronUp } from '@fortawesome/pro-solid-svg-icons';

@Component({
    selector: 'app-back-to-top',
    imports: [NgIf, FontAwesomeModule],
    templateUrl: './back-to-top.component.html',
    styleUrl: './back-to-top.component.scss'
})
export class BackToTopComponent {

    fasChevronUp = icon(faChevronUp);

    isShow: boolean = false;
    topPosToStartShowing = 100;

    @HostListener('window:scroll')
    checkScroll() {
        const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
        this.isShow = scrollPosition >= this.topPosToStartShowing;
    }

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

}