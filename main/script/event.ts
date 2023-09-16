namespace DIG_main {

    export let language: string = "german";

    export function handleEvent(_event: Event): void {

        let target: HTMLElement = <HTMLImageElement>_event.target;
        let targetID: string = target.id;

        switch (targetID) {
            //Language
            case "DE_v":
            case "DE_h":
            case "EN_v":
            case "EN_h":
                targetID = targetID.slice(0, 2);
                changeLanguage(targetID, languageData);
                break;

            //Search
            case "SearchButton":
                search();
                break;

            default:
                break;
        }

    }

    // function rematchWidth(): void {
    //     console.log(screenWidth);
    //     matchWidth(screenWidth);
    // }

    export interface Language {
        textDE: string;
        textEN: string;
    }

    export interface LanguageData {
        LanguageText: Language[];
    }

    function changeLanguage(_targetID: string, _languageData: LanguageData): void {

        if (_targetID == "DE") {

            if (language != "german") {

                //change Flag
                enFlag.style.filter = "grayscale(100%)";
                deFlag.style.filter = "";

                //translate Navigation
                let aTag: HTMLCollectionOf<HTMLAnchorElement> = <HTMLCollectionOf<HTMLAnchorElement>>document.getElementsByClassName("languageText")
                for (let i = 0; i < aTag.length; i++) {
                    aTag[i].innerText = _languageData.LanguageText[i].textDE;
                }

                //translate Content

                language = "german";

            } else {
                console.log("already german");
            }

        } else if (_targetID == "EN") {

            if (language == "german") {

                //change Flag
                deFlag.style.filter = "grayscale(100%)";
                enFlag.style.filter = "";

                //translate Navigation
                let aTag: HTMLCollectionOf<HTMLAnchorElement> = <HTMLCollectionOf<HTMLAnchorElement>>document.getElementsByClassName("languageText")
                for (let i = 0; i < aTag.length; i++) {
                    aTag[i].innerText = _languageData.LanguageText[i].textEN;
                }

                //translate Content

                language = "english";

            } else {
                console.log("already english");
            }

        } else {
            console.log("error");
        }
    }

    function search(): void {

        let inputBar: HTMLInputElement = <HTMLInputElement>document.getElementById("inputSearch");
        console.log(inputBar.value);
    }

}
