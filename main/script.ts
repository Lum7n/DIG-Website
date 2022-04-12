namespace DIG_main {

window.addEventListener("load", handleLoad);


function handleLoad(): void {

    console.log("load");

    let body: HTMLBodyElement = <HTMLBodyElement>document.querySelector("body");
    body.style.backgroundColor = "#c49595";
}

}