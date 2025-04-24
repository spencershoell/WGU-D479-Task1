import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DemoSidebarComponent } from '../demo-sidebar/demo-sidebar.component';
import { BackToTopComponent } from '../back-to-top/back-to-top.component';

@Component({
    selector: 'app-footer',
    imports: [RouterLink, DemoSidebarComponent, BackToTopComponent],
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

    constructor(
        private viewportScroller: ViewportScroller
    ) {}

    public onClick(elementId: string): void { 
        this.viewportScroller.scrollToAnchor(elementId);
    }

}