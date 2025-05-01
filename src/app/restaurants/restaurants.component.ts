import { Component } from '@angular/core';
import { StarRatingComponent } from '../common/star-rating/star-rating.component';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-restaurants',
    imports: [NgFor, StarRatingComponent],
    templateUrl: './restaurants.component.html',
    styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent {

    fishAndRice = [{
        name: 'Ocean Harvest Grill',
        description: 'Lorem ipsum dolor sit amet consecte, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        imageUrl: 'images/AdobeStock_386953423.jpeg',
        rating: 5.0
    }, {
        name: 'Seaside Sushi & Rice',
        description: 'Lorem ipsum dolor sit amet consecte, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        imageUrl: 'images/AdobeStock_323498723.jpeg',
        rating: 4.0
    }, {
        name: 'Tropical Fish Feast',
        description: 'Lorem ipsum dolor sit amet consecte, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        imageUrl: 'images/AdobeStock_305093613.jpeg',
        rating: 4.5
    }, {
        name: 'Coral Reef Cuisine',
        description: 'Lorem ipsum dolor sit amet consecte, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        imageUrl: 'images/AdobeStock_136208567.jpeg',
        rating: 5.0
    }, {
        name: 'Island Rice & Fish',
        description: 'Lorem ipsum dolor sit amet consecte, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        imageUrl: 'images/AdobeStock_382296637.jpeg',
        rating: 3.5
    }];

    american = [{
        name: 'Island Grill & Diner',
        description: 'Lorem ipsum dolor sit amet consecte, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        imageUrl: 'images/AdobeStock_422172892.jpeg',
        rating: 4.5
    }, {
        name: 'Seaside Bistro',
        description: 'Lorem ipsum dolor sit amet consecte, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        imageUrl: 'images/AdobeStock_384100681.jpeg',
        rating: 3.5
    }, {
        name: 'Tropical Tavern',
        description: 'Lorem ipsum dolor sit amet consecte, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        imageUrl: 'images/AdobeStock_92591831.jpeg',
        rating: 4.5
    }];

    panAsian = [{
        name: 'Lagoon Lotus Café',
        description: 'Lorem ipsum dolor sit amet consecte, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        imageUrl: 'images/AdobeStock_265876584.jpeg',
        rating: 4.5
    }, {
        name: 'Island Spice Fusion',
        description: 'Lorem ipsum dolor sit amet consecte, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        imageUrl: 'images/AdobeStock_358224553.jpeg',
        rating: 3.5
    }, {
        name: 'Red Tiger Diner',
        description: 'Lorem ipsum dolor sit amet consecte, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        imageUrl: 'images/AdobeStock_440688110.jpeg',
        rating: 4.5
    }];
}