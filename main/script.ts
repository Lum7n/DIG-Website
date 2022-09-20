namespace DIG_main {

    window.addEventListener("load", handleLoad);

    let open: boolean = false;

    let germanFlag: HTMLElement;
    let englishFlag: HTMLElement;

    let language: boolean = true;
    //true  = initial   = german
    //false             = english


    function handleLoad(): void {

        console.log("color");

        // let body: HTMLBodyElement = <HTMLBodyElement>document.querySelector("body");
        // body.style.color = "white";

        sizeTest();

        let burgerMenuBtn: HTMLDivElement = <HTMLDivElement>document.querySelector(".itemM");
        burgerMenuBtn.addEventListener("click", openBurgerMenu);

        let overlay: HTMLDivElement = <HTMLDivElement>document.querySelector(".overlay");
        overlay.addEventListener("click", closeBurgerMenu);

        germanFlag = <HTMLElement>document.getElementById("DE");
        germanFlag.addEventListener("click", languageToGerman);

        englishFlag = <HTMLElement>document.getElementById("EN");
        englishFlag.addEventListener("click", languageToEnglish);

        englishFlag.style.filter = "grayscale(100%)";
        englishFlag.style.webkitFilter = "grayscale(100%)";

    }

    function sizeTest(): void {

        let screenWidth: number = screen.width;
        let screenHeight: number = screen.height;

        console.log("Width: ", screenWidth);
        console.log("Height: ", screenHeight);

        let screenType: string;

        if (screenWidth < screenHeight) {
            console.log("vertical");
            screenType = "vertical";

            addStylesheet("style_vertical.css");
            matchWidth(screenWidth);

        } else if (screenWidth > screenHeight) {
            console.log("horizontal");
            screenType = "horizontal";

            addStylesheet("style_horizontal.css");

        } else {
            console.log("fehler");
        }
    }

    function addStylesheet(fileName: string): void {

        let head: HTMLHeadElement = document.head;
        let link: HTMLLinkElement = document.createElement("link");

        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = fileName;

        head.appendChild(link);
    }

    function matchWidth(screenWidth: number): void {

        if (screenWidth < 400) {

            let bodyWidth: number = screenWidth - 20;
            console.log("body: ", bodyWidth);

            let body: HTMLBodyElement = <HTMLBodyElement>document.querySelector("body");
            body.style.width = bodyWidth + "px";

        } else {

            let wholeMarginWidth: number = screenWidth * 0.1;
            let bodyWidth: number = screenWidth - wholeMarginWidth;
            console.log("body: ", bodyWidth);

            let body: HTMLBodyElement = <HTMLBodyElement>document.querySelector("body");
            body.style.width = bodyWidth + "px";
            body.style.marginLeft = (wholeMarginWidth / 2) + "px";

            let marginLogo: HTMLElement = <HTMLElement>document.getElementById("logoSize");
            marginLogo.style.marginLeft = (wholeMarginWidth / 4) + "px";

            let marginStripe: HTMLElement = <HTMLElement>document.getElementById("stripe");
            marginStripe.style.marginRight = "-" + (wholeMarginWidth / 2 - 1) + "px";

        }

    }

    function openBurgerMenu(): void {

        console.log("click");
        console.log(open);

        if (open == false) {

            let overlay: HTMLDivElement = <HTMLDivElement>document.querySelector(".overlay");
            overlay.style.width = "320px";
            open = true;

        } else {

            console.log("fehler");
        }

    }

    function closeBurgerMenu(): void {

        console.log("click");
        console.log(open);

        if (open == true) {

            let overlay: HTMLDivElement = <HTMLDivElement>document.querySelector(".overlay");
            overlay.style.width = "0%";
            open = false;

        } else {

            console.log("fehler");
        }


    }

    function languageToGerman(): void {

        console.log("DE");

        if (language != true) {

            console.log("wechsel auf deutsch");

            englishFlag.style.filter = "grayscale(100%)";
            englishFlag.style.webkitFilter = "grayscale(100%)";

            germanFlag.style.filter = "";
            germanFlag.style.webkitFilter = "";

            language = true;

        } else {

            console.log("deutsch grau gewesen");
        }
    }

    function languageToEnglish(): void {

        console.log("EN");

        if (language == true) {

            console.log("wechsel auf englisch");
            
            germanFlag.style.filter = "grayscale(100%)";
            germanFlag.style.webkitFilter = "grayscale(100%)";

            englishFlag.style.filter = "";
            englishFlag.style.webkitFilter = "";

            language = false;

        } else {

            console.log("englisch grau gewesen");
        }
    }



}