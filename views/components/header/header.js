const componentHere = "<object type=\"text/html\" data=\"../navBar/navbar.html\"> </object>";
const headerTemplate = document.createElement('template');
headerTemplate.innerHTML = `

<style>
    .header{
        text-align: center;
    }
    h1{
        color: blue;
    }
</style>

${componentHere}
`

class Header extends HTMLElement {
    constructor() {
       
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(headerTemplate.content);
    }
}

customElements.define('header-component', Header);