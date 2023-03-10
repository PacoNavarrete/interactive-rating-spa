import { ratingState } from "../state/ratingState.js"

export function toggleRatingSelected( domElements ) {

    domElements.forEach((element) => {
        element.addEventListener("click", () => {
            if(element.textContent === ratingState.userRating) {
                return;
            }else {
                domElements.forEach(el => el.classList.remove("rating_selected"));
                element.classList.add("rating_selected");
                ratingState.userRating = element.textContent;
            };
        });
    });
}