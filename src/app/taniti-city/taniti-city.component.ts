import { Component } from '@angular/core';
import { StarRatingComponent } from '../common/star-rating/star-rating.component';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-taniti-city',
    imports: [NgFor, StarRatingComponent],
    templateUrl: './taniti-city.component.html',
    styleUrls: ['./taniti-city.component.scss']
})
export class TanitiCityComponent {

    pubs = [{
        name: 'Seaside Alehouse',
        description: 'Lorem ipsum dolor sit amet consecte, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        imageUrl: 'images/AdobeStock_280488501.jpeg',
        rating: 5.0
    }, {
        name: 'Palm Tree Pub',
        description: 'Lorem ipsum dolor sit amet consecte, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        imageUrl: 'images/AdobeStock_313005883.jpeg',
        rating: 4.0
    }, {
        name: 'Island Craft Brewery',
        description: 'Lorem ipsum dolor sit amet consecte, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        imageUrl: 'images/AdobeStock_519073675.jpeg',
        rating: 4.5
    }];

    culture = [{
        name: 'Local History Museum',
        description: 'Lorem ipsum dolor sit amet consecte, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        imageUrl: 'images/AdobeStock_531760197.jpeg',
        rating: 4.5
    }, {
        name: 'Lagoon Gallery',
        description: 'Lorem ipsum dolor sit amet consecte, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        imageUrl: 'images/AdobeStock_396397311.jpeg',
        rating: 3.5
    }, {
        name: 'Palm Art Studio',
        description: 'Lorem ipsum dolor sit amet consecte, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        imageUrl: 'images/AdobeStock_290452369.jpeg',
        rating: 4.5
    }];

    entertainment = [{
        name: 'Bowling',
        description: 'Lorem ipsum dolor sit amet consecte, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        imageUrl: 'images/AdobeStock_473128096.jpeg',
        rating: 4.5
    }, {
        name: 'Dance Club',
        description: 'Lorem ipsum dolor sit amet consecte, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        imageUrl: 'images/AdobeStock_278700138.jpeg',
        rating: 3.5
    }, {
        name: 'Movie Theater',
        description: 'Lorem ipsum dolor sit amet consecte, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        imageUrl: 'images/AdobeStock_238916036.jpeg',
        rating: 4.5
    }, {
        name: 'Arcade',
        description: 'Lorem ipsum dolor sit amet consecte, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        imageUrl: 'images/AdobeStock_187269988.jpeg',
        rating: 3.0
    }];
}