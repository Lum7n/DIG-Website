namespace DIG_main {

window.addEventListener("load", handleLoad);


function handleLoad(): void {

    console.log("color");

    let body: HTMLBodyElement = <HTMLBodyElement>document.querySelector("body");
    body.style.color = "darkblue";
}

}