import { ratingState } from "../../state/ratingState.js"

export function ratingResults() {
    const doc = document;

    const $ratingResultsContent = doc.createElement("div");
        $ratingResultsContent.classList.add("rating-results");
        $ratingResultsContent.innerHTML = `
            <p class="result_rate">
                You selected 
                <span id="result">
                    ${ ratingState.userRating }
                </span>
                out of 5
            </p>
        `;
    
    return { $ratingResultsContent };
}