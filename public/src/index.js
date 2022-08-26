import * as components from "./components/index.js"
class AppContainer extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `
        <my-instagram usuario="sophie_nxz" comentarios="Red; apples blood tomato fire love anger"></my-instagram>
        `
    }
}

customElements.define("app-container",AppContainer);