export function surveyContent() {
    const doc = document;

    const $surveyQuestion = doc.createElement("p");
        $surveyQuestion.classList.add("survey_question");
        $surveyQuestion.textContent = "How did we do?";

    const $surveyMessage = doc.createElement("div");
        $surveyMessage.innerHTML = `
            <p class="survey_message">
                Please let us know how we did with your support <br/> request. All feedback is appreciated 
                to help us <br /> improve our offering!
            </p>`;
    
    const $surveyContainer = doc.createElement("div");
        $surveyContainer.classList.add("survey-content");
        $surveyContainer.appendChild($surveyQuestion);
        $surveyContainer.appendChild($surveyMessage);
    
    return { $surveyContainer };
}