namespace DIG_main {

    let language: boolean = true;
    //true  = initial   = german
    //false             = english

    export function handleEvent(_event: Event): void {

        let target: HTMLElement = <HTMLImageElement>_event.target;
        let targetID: string = target.id;

        switch (targetID) {
            case "DE_v":
            case "DE_h":
            case "EN_v":
            case "EN_h":

                targetID = targetID.slice(0, 2);
                changeLanguage(targetID);
                break;

            default:
                break;
        }
    }

    // function rematchWidth(): void {
    //     console.log(screenWidth);
    //     matchWidth(screenWidth);
    // }

    function changeLanguage(_targetID: string): void {

        if (_targetID == "DE") {

            if (language != true) {

                enFlag.style.filter = "grayscale(100%)";
                enFlag.style.webkitFilter = "grayscale(100%)";

                deFlag.style.filter = "";
                deFlag.style.webkitFilter = "";

                language = true;

            } else {
                console.log("already german");
            }

        } else if (_targetID == "EN") {

            if (language == true) {

                deFlag.style.filter = "grayscale(100%)";
                deFlag.style.webkitFilter = "grayscale(100%)";

                enFlag.style.filter = "";
                enFlag.style.webkitFilter = "";

                language = false;

            } else {
                console.log("already english");
            }

        } else {
            console.log("error");
        }
    }


}