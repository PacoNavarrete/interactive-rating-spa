import { surveyPage } from './src/pages/surveyPage.js';

const { $surveyCard } = surveyPage();

export function App() {
    const $root = document.getElementById( "root" );
        $root.appendChild($surveyCard);
};


