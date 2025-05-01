import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-faqs',
    imports: [NgClass],
    templateUrl: './faqs.component.html',
    styleUrls: ['./faqs.component.scss']
})
export class FaqsComponent {
    // Accordion
    contentHeight: number = 0;
    openSectionIndex: number = -1;
    toggleSection(index: number): void {
        if (this.openSectionIndex === index) {
            this.openSectionIndex = -1;
        } else {
            this.openSectionIndex = index;
            this.calculateContentHeight();
        }
    }
    isSectionOpen(index: number): boolean {
        return this.openSectionIndex === index;
    }
    calculateContentHeight(): void {
        const contentElement = document.querySelector('.accordion-content');
        if (contentElement) {
            this.contentHeight = contentElement.scrollHeight;
        }
    }

}