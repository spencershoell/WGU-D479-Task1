import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BackToTopComponent } from '../back-to-top/back-to-top.component';
import { icon } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn, faSkype, faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
    selector: 'app-footer',
    imports: [RouterLink, FontAwesomeModule, BackToTopComponent],
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

    fabFacebookF = icon(faFacebookF);
    fabTwitter = icon(faTwitter);
    fabLinkedinIn = icon(faLinkedinIn);
    faInstagram = icon(faInstagram);
    faSkype = icon(faSkype);

    constructor(
        private viewportScroller: ViewportScroller
    ) { }

    public onClick(elementId: string): void {
        this.viewportScroller.scrollToAnchor(elementId);
    }

}