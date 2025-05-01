import { Component } from '@angular/core';
import { StarRatingComponent } from '../common/star-rating/star-rating.component';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-transportation',
    imports: [NgFor, StarRatingComponent],
    templateUrl: './transportation.component.html',
    styleUrls: ['./transportation.component.scss']
})
export class TransportationComponent {

    transportation = [{
        name: 'Airport',
        description: 'Lorem ipsum dolor sit amet consecte, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        imageUrl: 'images/AdobeStock_390108332.jpeg',
        rating: 5.0
    }, {
        name: 'Yellow Leaf Bay',
        description: 'Lorem ipsum dolor sit amet consecte, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        imageUrl: 'images/AdobeStock_407266301.jpeg',
        rating: 4.0
    }, {
        name: 'Buses',
        description: 'Lorem ipsum dolor sit amet consecte, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        imageUrl: 'images/AdobeStock_454259379.jpeg',
        rating: 4.5
    }, {
        name: 'Car Rentals',
        description: 'Lorem ipsum dolor sit amet consecte, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        imageUrl: 'images/AdobeStock_321545359.jpeg',
        rating: 5.0
    }, {
        name: 'Bike Rentals',
        description: 'Lorem ipsum dolor sit amet consecte, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        imageUrl: 'images/AdobeStock_470896769.jpeg',
        rating: 3.5
    }, {
        name: 'Rideshare',
        description: 'Lorem ipsum dolor sit amet consecte, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        imageUrl: 'images/AdobeStock_108447371.jpeg',
        rating: 4.0
    }];
}