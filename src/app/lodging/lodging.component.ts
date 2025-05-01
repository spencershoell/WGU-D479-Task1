import { Component } from '@angular/core';
import { StarRatingComponent } from '../common/star-rating/star-rating.component';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-lodging',
    imports: [NgFor, StarRatingComponent],
    templateUrl: './lodging.component.html',
    styleUrls: ['./lodging.component.scss']
})
export class LodgingComponent {

    resorts = [{
        name: 'Oceanview Resort',
        description: 'Lorem ipsum dolor sit amet consecte, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        imageUrl: 'images/AdobeStock_413100374.jpeg',
        rating: 5.0
    }];

    hotels = [{
        name: 'Paradise Point Hotel',
        description: 'Lorem ipsum dolor sit amet consecte, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        imageUrl: 'images/AdobeStock_279709735.jpeg',
        rating: 5.0
    }, {
        name: 'Lagoon Vista Hotel',
        description: 'Lorem ipsum dolor sit amet consecte, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        imageUrl: 'images/AdobeStock_429097058.jpeg',
        rating: 4.0
    }, {
        name: 'Pacific Pearl Hotel',
        description: 'Lorem ipsum dolor sit amet consecte, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        imageUrl: 'images/AdobeStock_220413905.jpeg',
        rating: 4.5
    }, {
        name: 'Azure Bay Hotel',
        description: 'Lorem ipsum dolor sit amet consecte, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        imageUrl: 'images/AdobeStock_162122277.jpeg',
        rating: 5.0
    }, {
        name: 'Sunset Lagoon Hotel',
        description: 'Lorem ipsum dolor sit amet consecte, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        imageUrl: 'images/AdobeStock_313384777.jpeg',
        rating: 3.5
    }, {
        name: 'Island Escape Hotel',
        description: 'Lorem ipsum dolor sit amet consecte, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        imageUrl: 'images/AdobeStock_308091300.jpeg',
        rating: 4.0
    }];

    bnbs = [{
        name: 'Coral Cove B&B',
        description: 'Lorem ipsum dolor sit amet consecte, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        imageUrl: 'images/AdobeStock_257947064.jpeg',
        rating: 4.5
    }, {
        name: 'Palm Grove B&B',
        description: 'Lorem ipsum dolor sit amet consecte, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        imageUrl: 'images/AdobeStock_363486026.jpeg',
        rating: 3.5
    }, {
        name: 'Sunrise Shores B&B',
        description: 'Lorem ipsum dolor sit amet consecte, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        imageUrl: 'images/AdobeStock_445114033.jpeg',
        rating: 4.5
    }];

    hostels = [{
        name: 'Surf Shack Hostel',
        description: 'Lorem ipsum dolor sit amet consecte, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        imageUrl: 'images/AdobeStock_475581633.jpeg',
        rating: 4.5
    }];
}