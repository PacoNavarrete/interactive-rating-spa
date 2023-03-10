import { gratitudePage } from "./gratitudePage.js";
import { starIcon } from "../components/survey_page/starIcon.js";
import { surveyContent } from "../components/survey_page/surveyContent.js";
import { ratingOptions } from "../components/survey_page/ratingOptions.js";
import { submitButton } from "../components/survey_page/submitButton.js";
import {ratingState } from "../state/ratingState.js"

export const surveyPage = () => {

    const { $iconContainer } = starIcon();
    const { $surveyContainer } = surveyContent();
    const { $ratingContent } = ratingOptions();
    const { $submitButton } = submitButton();

    const $surveyCard = document.createElement("div");
        $surveyCard.classList.add(
            "card-container", "animate__animated", "animate__backInRight"
        );
        $surveyCard.id = "survey-card"
        $surveyCard.appendChild($iconContainer);
        $surveyCard.appendChild($surveyContainer);
        $surveyCard.appendChild($ratingContent);
        $surveyCard.appendChild($submitButton);

        $submitButton.addEventListener("click", () => {
            if(ratingState.userRating === undefined){
                return;
            } else {
                $surveyCard.classList.remove("animate__backInRight");
                $surveyCard.classList.add("animate__backOutLeft");
                const { $gratitudeCard } = gratitudePage();
                setTimeout(() => {$surveyCard.replaceWith( $gratitudeCard )}, 500);
            }
        });

    return { $surveyCard };
};