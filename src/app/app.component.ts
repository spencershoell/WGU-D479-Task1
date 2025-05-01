import { Component, Renderer2 } from '@angular/core';
import { NavigationEnd, Router, RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './common/navbar/navbar.component';
import { FooterComponent } from './common/footer/footer.component';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, NgClass, NavbarComponent, FooterComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    constructor(public router: Router, private renderer: Renderer2) { }

    ngOnInit() {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                this.renderer.setProperty(document.body, 'scrollTop', 0);
                this.renderer.setProperty(document.documentElement, 'scrollTop', 0);
            }
        });
    }
}