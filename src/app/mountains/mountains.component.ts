import { Component } from '@angular/core';
import { StarRatingComponent } from '../common/star-rating/star-rating.component';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-mountains',
    imports: [NgFor, StarRatingComponent],
    templateUrl: './mountains.component.html',
    styleUrls: ['./mountains.component.scss']
})
export class MountainsComponent {

    beaches = [{
        name: 'Paradise Cove',
        description: 'Lorem ipsum dolor sit amet consecte, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        imageUrl: 'images/AdobeStock_685179826.jpeg',
        rating: 5.0
    }, {
        name: 'Sunbeam Sands',
        description: 'Lorem ipsum dolor sit amet consecte, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        imageUrl: 'images/AdobeStock_347451202.jpeg',
        rating: 4.0
    }, {
        name: 'Azure Bay',
        description: 'Lorem ipsum dolor sit amet consecte, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        imageUrl: 'images/AdobeStock_305294528.jpeg',
        rating: 4.5
    }, {
        name: 'Coral Cove',
        description: 'Lorem ipsum dolor sit amet consecte, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        imageUrl: 'images/AdobeStock_118733032.jpeg',
        rating: 5.0
    }, {
        name: 'Golden Grains',
        description: 'Lorem ipsum dolor sit amet consecte, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        imageUrl: 'images/AdobeStock_105902613.jpeg',
        rating: 3.5
    }, {
        name: 'Serene Shore',
        description: 'Lorem ipsum dolor sit amet consecte, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        imageUrl: 'images/AdobeStock_360855513.jpeg',
        rating: 4.0
    }];

    snorkelings = [{
        name: 'Coral Gardens',
        description: 'Lorem ipsum dolor sit amet consecte, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        imageUrl: 'images/AdobeStock_208142964.jpeg',
        rating: 4.5
    }, {
        name: 'Crystal Lagoon',
        description: 'Lorem ipsum dolor sit amet consecte, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        imageUrl: 'images/AdobeStock_348118831.jpeg',
        rating: 3.5
    }, {
        name: 'Marine Sanctuary',
        description: 'Lorem ipsum dolor sit amet consecte, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        imageUrl: 'images/AdobeStock_300318143.jpeg',
        rating: 4.5
    }];

    fishingTours = [{
        name: 'Deep Sea Adventure',
        description: 'Lorem ipsum dolor sit amet consecte, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        imageUrl: 'images/AdobeStock_431337806.jpeg',
        rating: 4.5
    }, {
        name: 'Reef Fishing Excursion',
        description: 'Lorem ipsum dolor sit amet consecte, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        imageUrl: 'images/AdobeStock_272985580.jpeg',
        rating: 3.5
    }, {
        name: 'Mangrove Fishing Safari',
        description: 'Lorem ipsum dolor sit amet consecte, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        imageUrl: 'images/AdobeStock_339043748.jpeg',
        rating: 4.5
    }];
}