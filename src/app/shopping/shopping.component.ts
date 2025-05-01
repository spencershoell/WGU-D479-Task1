import { Component } from '@angular/core';
import { StarRatingComponent } from '../common/star-rating/star-rating.component';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-shopping',
    imports: [NgFor, StarRatingComponent],
    templateUrl: './shopping.component.html',
    styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent {

    supermarkets = [{
        name: 'Island Fresh Market',
        description: 'Lorem ipsum dolor sit amet consecte, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        imageUrl: 'images/AdobeStock_567341304.jpeg',
        rating: 5.0
    }, {
        name: 'Seaside Superstore',
        description: 'Lorem ipsum dolor sit amet consecte, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        imageUrl: 'images/AdobeStock_227666492.jpeg',
        rating: 4.0
    }];

    groceryStores = [{
        name: 'Palm Tree Grocers',
        description: 'Lorem ipsum dolor sit amet consecte, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        imageUrl: 'images/AdobeStock_401355282.jpeg',
        rating: 4.5
    }, {
        name: 'Lagoon Fresh Foods',
        description: 'Lorem ipsum dolor sit amet consecte, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        imageUrl: 'images/AdobeStock_248428253.jpeg',
        rating: 3.5
    }];

    convenienceStores = [{
        name: 'Island Quick Stop',
        description: 'Lorem ipsum dolor sit amet consecte, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        imageUrl: 'images/AdobeStock_157223254.jpeg',
        rating: 4.5
    }];
}