class Header extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
        <style>
        
        ul {
          list-style-type: none;
          padding: 0;
          margin: 0;
          overflow: hidden;
          background-color: #333;
          position: -webkit-sticky; /* Safari */
          position: sticky;
          top: 0;
          width: 100%;
        }
        
        li {
          float: left;
        }
        
        li a {
          display: block;
          color: white;
          text-align: center;
          padding: 14px 16px;
          text-decoration: none;
        }
        
        li a:hover {
          background-color: #111;
        }
        
        .active {
          background-color: #4CAF50;
        }

        .header {
            width: 100%;
            height: 400px;
            background-image: url("../../img/banner.jpg");
        }

        .banner {
          color: white;
          z-index: 10;
          margin: 0;
          padding: 2px;
          text-align: center;
        }

        .banner-text {
          background-color: #6262f3;
        }
        </style>
        
        <div class="header">
          <h2 class="banner">⬇️<span class="banner-text">Rent It Easy</span>⬇️</h1>
        </div>

        <ul>
            <li><a class="active" href="./">🏠 Home</a></li>
            <li><a href="#bikes">🚴 Bikes</a></li>
            <li><a href="#shops">🏪 Shops</a></li>
            <li style="float:right"><a class="active" href="#about">ℹ️ About</a></li>
        </ul>
        `
    }

    connectedCallback() {

    }
}

customElements.define('jn-header', Header);