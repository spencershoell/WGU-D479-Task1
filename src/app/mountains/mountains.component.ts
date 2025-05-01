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

    hikes = [{
        name: 'Emerald Peak Trail ',
        description: 'Lorem ipsum dolor sit amet consecte, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        imageUrl: 'images/AdobeStock_246991670.jpeg',
        rating: 4.7
    }, {
        name: 'Sunset Ridge Path',
        description: 'Lorem ipsum dolor sit amet consecte, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        imageUrl: 'images/AdobeStock_289562006.jpeg',
        rating: 3.8
    }, {
        name: 'Mystic Falls Path',
        description: 'Lorem ipsum dolor sit amet consecte, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        imageUrl: 'images/AdobeStock_361702213.jpeg',
        rating: 4.0
    }, {
        name: 'Starlight Ridge Trail ',
        description: 'Lorem ipsum dolor sit amet consecte, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        imageUrl: 'images/AdobeStock_516083290.jpeg',
        rating: 5.0
    }, {
        name: 'Serenity Summit',
        description: 'Lorem ipsum dolor sit amet consecte, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        imageUrl: 'images/AdobeStock_212971004.jpeg',
        rating: 3.5
    }, {
        name: 'Moonlit Valley Hike',
        description: 'Lorem ipsum dolor sit amet consecte, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        imageUrl: 'images/AdobeStock_564746007.jpeg',
        rating: 2.8
    }];
}