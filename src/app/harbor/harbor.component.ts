import { Component } from '@angular/core';
import { StarRatingComponent } from '../common/star-rating/star-rating.component';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-harbor',
    imports: [NgFor, StarRatingComponent],
    templateUrl: './harbor.component.html',
    styleUrls: ['./harbor.component.scss']
})
export class HarborComponent {

    beaches = [{
        name: 'Paradise Cove',
        description: 'Lorem ipsum dolor sit amet consecte, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        imageUrl: 'images/AdobeStock_685179826.jpeg',
        rating: 5.0
    }, {
        name: 'Azure Bay',
        description: 'Lorem ipsum dolor sit amet consecte, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        imageUrl: 'images/AdobeStock_305294528.jpeg',
        rating: 4.5
    }, {
        name: 'Serene Shore',
        description: 'Lorem ipsum dolor sit amet consecte, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        imageUrl: 'images/AdobeStock_360855513.jpeg',
        rating: 4.0
    }];

    snorkelings = [{
        name: 'Marine Sanctuary',
        description: 'Lorem ipsum dolor sit amet consecte, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        imageUrl: 'images/AdobeStock_300318143.jpeg',
        rating: 4.5
    }];

    fishingTours = [{
        name: 'Mangrove Fishing Safari',
        description: 'Lorem ipsum dolor sit amet consecte, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        imageUrl: 'images/AdobeStock_339043748.jpeg',
        rating: 4.5
    }];
}