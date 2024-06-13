export default class TabComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    addListenerOnButton() {
        this.shadowRoot.querySelector('#btnCerrar').addEventListener('click', () => {
            this.dispatchEvent(new CustomEvent('cerrar-clicked', { detail: this.id }));
        });
    }

    render() {
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
        <style>
            .tab{
                width: 200px;
                height: 20px;
                background-color: #f0f0f0;
                border: 1px solid #ccc;
                border-radius: 15px 15px 0 0;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                margin-right: 1px;
                display: flex;
                align-items: center;
                padding: 10px;
                justify-content: space-between;
            }
            .titulo-pestana{
                font-size: 15px;
                font-weight: 400;
            }
            .cerrar:hover{
                background-color: lightgray;
                border-radius: 50%;
                cursor: pointer;
            }

            #btnCerrar{
                background-color: transparent;
                border: 0px solid #ccc;
                border-radius: 15px 15px 0 0;
                width: 30px;
                height: 30px;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-left: 5px;
            }
            #btnCerrar:hover{
                background-color: lightgray;
                border-radius: 50%;
                cursor: pointer;
            }

        </style>
    
        <div class="tab">
            <span class="titulo-pestana">Nueva pestaña</span>
            <button id="btnCerrar">
                <span class="material-symbols-outlined cerrar">
                    close
                </span>
            </button>
        </div>
        `;
        this.addListenerOnButton();
    }
}