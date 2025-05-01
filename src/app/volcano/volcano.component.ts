import { Component } from '@angular/core';
import { StarRatingComponent } from '../common/star-rating/star-rating.component';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-volcano',
    imports: [NgFor, StarRatingComponent],
    templateUrl: './volcano.component.html',
    styleUrls: ['./volcano.component.scss']
})
export class VolcanoComponent {

    hikes = [{
        name: 'South Rim Hike',
        description: 'Lorem ipsum dolor sit amet consecte, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        imageUrl: 'images/AdobeStock_251907933.jpeg',
        rating: 4.7
    }, {
        name: 'North Rim Hike',
        description: 'Lorem ipsum dolor sit amet consecte, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        imageUrl: 'images/AdobeStock_415280982.jpeg',
        rating: 3.8
    }];
}