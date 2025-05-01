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
}