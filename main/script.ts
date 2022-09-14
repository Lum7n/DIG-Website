namespace DIG_main {

    window.addEventListener("load", handleLoad);


    function handleLoad(): void {

        console.log("color");

        // let body: HTMLBodyElement = <HTMLBodyElement>document.querySelector("body");
        // body.style.color = "white";

        sizeTest();

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

        let bodyWidth: number = screenWidth - 20;
        console.log("body: ", bodyWidth);

        let body: HTMLBodyElement = document.body;
        body.style.width = bodyWidth;
    }

}