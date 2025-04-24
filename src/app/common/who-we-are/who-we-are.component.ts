import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
    selector: 'app-who-we-are',
    imports: [],
    templateUrl: './who-we-are.component.html',
    styleUrls: ['./who-we-are.component.scss']
})
export class WhoWeAreComponent {

    constructor(
        private viewportScroller: ViewportScroller
    ) {}

    public onClick(elementId: string): void { 
        this.viewportScroller.scrollToAnchor(elementId);
    }

}