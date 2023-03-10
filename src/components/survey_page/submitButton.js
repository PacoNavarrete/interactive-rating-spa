export function submitButton( ) {
    const doc = document;
    
    const $submitButton = doc.createElement("button");
    $submitButton.type = "button";
    $submitButton.id = "submit-rating";
    $submitButton.textContent = "SUBMIT"

    return { $submitButton };
}