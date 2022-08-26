class MyInstagram extends HTMLElement{
    static get observedAttributes (){
        return ['usuario', 'comentarios'];
    }


constructor(){
    super();
    this.attachShadow({mode: 'open' });
}

connectedCallBack(){
    this.render();
}

attributeChangedCallback(propName, oldValue, newValue){
    this[propName] = newValue;
    this.render();
}

render(){
    this.shadowRoot.innerHTML = `
    <link rel="stylesheet" href="/src/components/post/style.css"
    <section>
    <img src="imagenes/fotoperfil.png" class="fotoperfil" <p class="usuario"> ${this.usuario}</p>
    
    <img src="imagenes/post.png" class="post">
    <p></p>
        <img src="imagenes/megusta.png">
        <img src="imagenes/comentarios.png">
        <img src="imagenes/compartir.png">
        <img src="imagenes/guardar.png">
    <p class="comentario"> ${this.usuario} ${this.comentarios}</p>
    </section>
    `;
}

}

customElements.define('my-instagram', MyInstagram);
export default MyInstagram;
