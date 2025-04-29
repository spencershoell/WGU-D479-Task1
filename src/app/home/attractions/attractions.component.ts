import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight, faLandmark, faLighthouse, faMountains, faTreePalm, faUmbrellaBeach, faVolcano } from "@fortawesome/pro-solid-svg-icons";
import { icon } from "@fortawesome/fontawesome-svg-core";
import { Router } from '@angular/router';

@Component({
    selector: 'app-attractions',
    imports: [FontAwesomeModule],
    templateUrl: './attractions.component.html',
    styleUrls: ['./attractions.component.scss']
})
export class AttractionsComponent {

    fasUmbrellaBeach = icon(faUmbrellaBeach);
    fasLighthouse = icon(faLighthouse);
    fasMountains = icon(faMountains);
    fasTreePalm = icon(faTreePalm);
    fasLandmark = icon(faLandmark);
    fasVolcano = icon(faVolcano);
    fasArrowRight = icon(faArrowRight);

    constructor(private router: Router) { }

    public onClick(link: string): void {
        this.router.navigate([link]);
    }
}
