namespace DIG_main {

    export interface Listitem {
        name: string;
        element: string;
        class: string;
        id: string;
        href: string;
        text: string;
    }

    export interface Data {
        [category: string]: Listitem[];
    }

    export function generateContent(_data: Data): void {
        for (let category in _data) {
            let listitems: Listitem[] = _data[category];
            let group: HTMLElement | null = null;
            switch (category) {

                // // Einkaufen
                // case "eArtikel":
                //     group = createDatalist(listitems, category);
                //     break;
                // case "eStepper":
                //     group = createStepper(listitems, category);
                //     break;
                // case "eRadio":
                //     group = createRadio(listitems, category);
                //     break;
                // case "eLaden":
                //     group = createDatalist(listitems, category);
                //     break;

                // //Haushalt
                // case "hSelect":
                //     group = createSelect(listitems, category);
                //     break;
                // case "hStepper":
                //     group = createStepper(listitems, category);
                //     break;
                // case "hRadio":
                //     group = createRadio(listitems, category);
                //     break;
                // case "hCheckbox":
                //     group = createCheckbox(listitems, category);
                //     break;

                // //Anderes
                // case "aDatalist":
                //     group = createDatalist(listitems, category);
                //     break;
                // case "aRadio":
                //     group = createRadio(listitems, category);
                //     break;
                    
                default:
                    break;
            }

            let span: HTMLSpanElement | null = document.querySelector("span#" + category);
            if (span && group)              // wenn span und group definiert sind, bezogen auf null
                span.appendChild(group);
        }
    }



}