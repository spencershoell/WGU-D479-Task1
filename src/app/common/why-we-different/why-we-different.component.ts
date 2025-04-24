import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
    selector: 'app-why-we-different',
    imports: [],
    templateUrl: './why-we-different.component.html',
    styleUrls: ['./why-we-different.component.scss']
})
export class WhyWeDifferentComponent {

    constructor(
        private viewportScroller: ViewportScroller
    ) {}

    public onClick(elementId: string): void { 
        this.viewportScroller.scrollToAnchor(elementId);
    }

}