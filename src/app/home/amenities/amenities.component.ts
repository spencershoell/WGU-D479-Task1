import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { faArrowRight, faBedFront, faCarpool, faForkKnife, faQuestion, faStore } from '@fortawesome/pro-solid-svg-icons';
import { icon } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Router } from '@angular/router';

@Component({
    selector: 'app-amenities',
    imports: [FontAwesomeModule],
    templateUrl: './amenities.component.html',
    styleUrls: ['./amenities.component.scss']
})
export class AmenitiesComponent {

    fasArrowRight = icon(faArrowRight);

    fasBedFront = icon(faBedFront);
    fasStore = icon(faStore);
    fasForkKnife = icon(faForkKnife);
    fasCarpool = icon(faCarpool);
    fasQuestion = icon(faQuestion);

    constructor(
        private router: Router
    ) { }

    public onClick(link: string): void {
        this.router.navigate([link]);
    }
}
