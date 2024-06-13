import HeaderComponent from "../header-component/header-component.js";
import TabComponent from "../tab-component/tab-component.js";
export default class MainComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.googleLogo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png';
        this.contenido = [
            "<h1>Buenos días</h1>",
            "<ul><li>Correr</li><li>Jugar</li></ul>",
            "<p>Aquí iría un Lorem ipsum si tuviera uno</p>",
            `<img src='${this.googleLogo}'>`,
            "<h2>¡Hola, mundo!</h2>",
            "<p>Este es un párrafo adicional.</p>",
            "<ul><li>Leer</li><li>Escribir</li></ul>",
            "<h3>Subtítulo interesante</h3>",
            "<p>Otro párrafo con más información.</p>",
            `<img src='https://ejemplo.com/imagen.jpg'>`
        ];
        this.contadorPestanas = 0;
        this.pestanas = [`<tab-component id='${this.contadorPestanas}' content='${this.contenido[this.contadorPestanas]}'></tab-component>`];
    }

    connectedCallback() {
        this.render();
    }

    anadirPestana() {
        const button = this.shadowRoot.querySelector("button");
        button.addEventListener("click", () => {
            this.pestanas.push(`<tab-component id="${this.contadorPestanas}" content = "${this.contenido[this.contadorPestanas]}"></tab-component>`);
            if (this.contadorPestanas >= this.contenido.length - 1) {
                this.contadorPestanas = 0;
            } else {
                this.contadorPestanas++;
            }
            this.render();
        });
    }

    borrarPestana() {
        const tabComponents = this.shadowRoot.querySelectorAll("tab-component");
        tabComponents.forEach(tabComponent => {
            tabComponent.addEventListener('cerrar-clicked', (event) => {
                const id = event.id;
                this.pestanas.splice(id, 1);
                console.log(id, this.pestanas);
                this.contadorPestanas--;
                if (this.contadorPestanas <= 0) {
                    this.contadorPestanas = this.pestanas.length - 1;
                }
                this.render();
            });
        });
    }

    render() {
        const contentActual = this.contenido[this.contadorPestanas] !== undefined ? this.contenido[this.contadorPestanas] : "<p>Agrega una nueva pestaña</p>"
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
        <style>
            .tabs{
                display: flex;
                align-items: center;
            }
            main{
                display: flex;
                align-items: center;
                justify-content: center;
            }
            button{
                background-color: transparent;
                border: 0px solid #ccc;
                border-radius: 15px 15px 0 0;
            }
            button{
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
            button:hover{
                background-color: lightgray;
                border-radius: 50%;
                cursor: pointer;
            }
        </style>
        <header>
            <section class = "tabs">
                ${this.pestanas}
                <button>
                    <span class="material-symbols-outlined cerrar">
                        add
                    </span>
                </button>
            </section>
            <section>
                <header-component>
                </header-component>
            </section>
        </header>
        <main>
            ${contentActual}
        </main>
        `;
        this.anadirPestana();
        this.borrarPestana();
    }
}

customElements.define("header-component", HeaderComponent);
customElements.define("tab-component", TabComponent);