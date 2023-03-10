import { gratitudeContent } from "../components/gratitude_page/gratitudeContent.js"
import { ratingResults } from "../components/gratitude_page/ratingResults.js"
import { illustrationContent } from "../components/gratitude_page/illustrationContent.js"


export function gratitudePage() {
    const doc = document
    const { $gratitudeContent } = gratitudeContent();
    const { $ratingResultsContent } = ratingResults();
    const { $illustrationContent } = illustrationContent();
    
    const $gratitudeCard = doc.createElement("div");
        $gratitudeCard.classList.add("card-container", "animate__animated", "animate__backInRight");
        $gratitudeCard.id = "gratitude-card"
        $gratitudeCard.appendChild($illustrationContent);
        $gratitudeCard.appendChild($ratingResultsContent);
        $gratitudeCard.appendChild($gratitudeContent);

    return { $gratitudeCard };
}