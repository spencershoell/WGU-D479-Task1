import { Component, Input } from "@angular/core";
import { faStar, faStarHalfStroke } from "@fortawesome/pro-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgFor } from "@angular/common";

@Component({
    selector: 'app-star-rating',
    templateUrl: './star-rating.component.html',
    styleUrls: ['./star-rating.component.scss'],
    imports: [NgFor, FontAwesomeModule],
})
export class StarRatingComponent {
    @Input() rating: number = 0;
    fasStar = faStar;
    fasStarHalfStroke = faStarHalfStroke;
    farStar = farStar;

    @Input() maxRating: number = 5;

    get fullStarRating() {
        // Return array of number of elements of this.rating
        return Array.from({ length: Math.floor(this.rating) }, (_, i) => i + 1);
    }

    get partialStarRating() {
        // Return array of number of elements of this.rating
        let numStr = this.rating.toString();
        let decimalPart = numStr.split('.')[1] ? numStr.split('.')[1].length : 0;

        if (decimalPart > 0) {
            return Array.from({ length: 1 }, (_, i) => i + 1);
        }
        return [];
    }

    get emptyStarRating() {
        // Return array of number of elements of this.rating
        return Array.from({ length: Math.floor(this.maxRating - this.rating) }, (_, i) => i + 1);
    }
}