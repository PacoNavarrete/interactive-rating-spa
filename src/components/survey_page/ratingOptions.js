import { toggleRatingSelected } from "../../helpers/toggleRatingSelected.js"

export function ratingOptions() {
    const doc = document;
    const ratingArray = [1, 2, 3, 4, 5];

    const ratingValues = ratingArray.map((value) => {
        const $ratingValue = doc.createElement("li");
        $ratingValue.classList.add("rating_value");
        $ratingValue.textContent = value;

        return $ratingValue;
    });

    toggleRatingSelected(ratingValues);

    const $ratingContent = doc.createElement("ul");
        $ratingContent.classList.add("rating-content");
        $ratingContent.append(...ratingValues);

    return { $ratingContent };
}