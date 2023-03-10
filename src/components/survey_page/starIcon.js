export function starIcon() {
    const doc = document;

    const $iconStar = doc.createElement("img");
        $iconStar.classList.add("icon_star");
        $iconStar.src = "./images/icon-star.svg";
        $iconStar.alt = "star";
    const $iconContainer = doc.createElement("div");
        $iconContainer.classList.add("icon-container-star");
        $iconContainer.appendChild($iconStar);
    
    return { $iconContainer };

}