export default class HeaderComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
        <style>
            section{
                background-color: lightgray;
                width: 100%;
                height: auto;
                display: flex;
                align-items: center;
                padding: 10px;
                box-sizing: border-box;
                justify-content: center;
            }
            .icono{
                margin-right: 12px;
            }
            input{
                width: 100%;
                height: 25px;
                outline: none;
                border-radius: 5px;
                border: 0px;
                font-family: "Roboto", sans-serif;
            }
        </style>
        <section>
            <span class="material-symbols-outlined icono">
                arrow_back
            </span>
            <span class="material-symbols-outlined icono">
                arrow_forward
            </span>
            <span class="material-symbols-outlined icono">
                refresh
            </span>
            <span class="material-symbols-outlined icono">
                home
            </span>
            <input id="url" type="text" class="icono">
            <span class="material-symbols-outlined icono">
                star
            </span>
            <span class="material-symbols-outlined">
                import_contacts
            </span>

        </section>
        `;
    }
}