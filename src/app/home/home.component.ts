import { Component } from '@angular/core';
import { BannerComponent } from './banner/banner.component';
import { AttractionsComponent } from './attractions/attractions.component';
import { AmenitiesComponent } from './amenities/amenities.component';

@Component({
    selector: 'app-home',
    imports: [BannerComponent, AmenitiesComponent, AttractionsComponent],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent { }