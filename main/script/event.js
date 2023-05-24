"use strict";
var DIG_main;
(function (DIG_main) {
    DIG_main.language = "german";
    function handleEvent(_event) {
        let target = _event.target;
        let targetID = target.id;
        switch (targetID) {
            //Language
            case "DE_v":
            case "DE_h":
            case "EN_v":
            case "EN_h":
                targetID = targetID.slice(0, 2);
                changeLanguage(targetID, DIG_main.languageData);
                break;
            //Search
            case "SearchButton":
                search();
                break;
            default:
                break;
        }
    }
    DIG_main.handleEvent = handleEvent;
    function changeLanguage(_targetID, _languageData) {
        if (_targetID == "DE") {
            if (DIG_main.language != "german") {
                //change Flag
                DIG_main.enFlag.style.filter = "grayscale(100%)";
                DIG_main.deFlag.style.filter = "";
                //translate Navigation
                let aTag = document.getElementsByClassName("languageText");
                for (let i = 0; i < aTag.length; i++) {
                    aTag[i].innerText = _languageData.LanguageText[i].textDE;
                }
                //translate Content
                DIG_main.language = "german";
            }
            else {
                console.log("already german");
            }
        }
        else if (_targetID == "EN") {
            if (DIG_main.language == "german") {
                //change Flag
                DIG_main.deFlag.style.filter = "grayscale(100%)";
                DIG_main.enFlag.style.filter = "";
                //translate Navigation
                let aTag = document.getElementsByClassName("languageText");
                for (let i = 0; i < aTag.length; i++) {
                    aTag[i].innerText = _languageData.LanguageText[i].textEN;
                }
                //translate Content
                DIG_main.language = "english";
            }
            else {
                console.log("already english");
            }
        }
        else {
            console.log("error");
        }
    }
    function search() {
        let inputBar = document.getElementById("inputSearch");
        console.log(inputBar.value);
    }
    // export function googleTranslateElementInit() {
    //     new google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element');
    // }
})(DIG_main || (DIG_main = {}));
// <!DOCTYPE html>
// <html lang="en-US">
// <body>
// <h1>My Web Page</h1>
// <p>Hello everybody!</p>
// <p>Translate this page:</p>
// <div id="google_translate_element"></div>
// <script type="text/javascript">
// function googleTranslateElementInit() {
//   new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
// }
// </script>
// <script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
// <p>You can translate the content of this page by selecting a language in the select box.</p>
// </body>
// </html>
//# sourceMappingURL=event.js.map