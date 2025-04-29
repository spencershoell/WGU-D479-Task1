import { Component } from '@angular/core';
import { StarRatingComponent } from '../common/star-rating/star-rating.component';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-rainforests',
    imports: [NgFor, StarRatingComponent],
    templateUrl: './rainforests.component.html',
    styleUrls: ['./rainforests.component.scss']
})
export class RainforestsComponent {

    ziplinings = [{
        name: 'Rainforest Canopy Zipline',
        description: 'Lorem ipsum dolor sit amet consecte, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        imageUrl: 'images/AdobeStock_464933709.jpeg',
        rating: 5.0
    }, {
        name: 'Waterfall Zipline',
        description: 'Lorem ipsum dolor sit amet consecte, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        imageUrl: 'images/AdobeStock_285080691.jpeg',
        rating: 4.0
    }];

    walks = [{
        name: 'Crystal Creek Trail',
        description: 'Lorem ipsum dolor sit amet consecte, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        imageUrl: 'images/AdobeStock_320065085.jpeg',
        rating: 5.0
    }, {
        name: 'Hidden Falls Trail',
        description: 'Lorem ipsum dolor sit amet consecte, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        imageUrl: 'images/AdobeStock_485164887.jpeg',
        rating: 3.5
    }, {
        name: 'Emerald Canopy Trail',
        description: 'Lorem ipsum dolor sit amet consecte, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        imageUrl: 'images/AdobeStock_541145131.jpeg',
        rating: 4.5
    }];
}