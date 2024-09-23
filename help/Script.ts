namespace sortAlphabetic {

    window.addEventListener("load", init);

    function init() {
        let ul: HTMLUListElement = <HTMLUListElement>document.querySelector(".help");
        console.log(ul);

        if(ul != null) {
            let list: HTMLCollectionOf<HTMLLIElement> = ul.getElementsByTagName("li");
            console.log(list);
    
            let liArray: HTMLLIElement[] = Array.prototype.slice.call(list);
            console.log(liArray);
    
            ul.innerHTML = "";
    
            liArray.sort((a, b) => a.innerText.localeCompare(b.innerText));
            liArray.forEach(liElement => ul.appendChild(liElement));
        }
    }
}