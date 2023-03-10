export function illustrationContent() {
    const doc = document;

    const $illustrationImage = doc.createElement("img");
        $illustrationImage.src = "./images/illustration-thank-you.svg";
        $illustrationImage.alt = "thank-you";
        $illustrationImage.classList.add("thanks_illustration");

    const $illustrationContent = doc.createElement("div");
        $illustrationContent.classList.add("illustration-container");
        $illustrationContent.appendChild($illustrationImage);
    
    return { $illustrationContent };
};