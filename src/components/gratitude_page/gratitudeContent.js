export function gratitudeContent() {
    const doc = document;

    const $gratitudeTitle = doc.createElement("p");
        $gratitudeTitle.classList.add("gratitude_title");
        $gratitudeTitle.textContent = "Thank you!";
    
    const $gratitudeMessage = doc.createElement("p");
        $gratitudeMessage.classList.add("gratitude_message");
        $gratitudeMessage.textContent = `We appreciate you taking 
        the time to give a rating. If you ever need more support,
        don’t hesitate to get in touch!`;

    const $gratitudeContent = doc.createElement("div");
        $gratitudeContent.classList.add("gratitude-content");
        $gratitudeContent.appendChild($gratitudeTitle);        
        $gratitudeContent.appendChild($gratitudeMessage);

    return { $gratitudeContent };

}