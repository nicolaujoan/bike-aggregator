class AvailabilityCard extends HTMLElement {
    constructor() {
        super();
        this._availability;
        this._rentButton;
        this._detailButton;
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
        <style>
        .card {
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          max-width: 300px;
          min-width: 300px;
          text-align: center;
          font-family: arial;
        }
        
        .price {
          color: grey;
          font-size: 22px;
        }
        
        .card button {
          border: none;
          outline: 0;
          padding: 12px;
          color: white;
          text-align: center;
          cursor: pointer;
          width: 100%;
          font-size: 18px;
        }

        .rent {
            background-color: #DC143C;
        }

        .detail {
            background-color: #006400;
        }
        
        .card button:hover {
          opacity: 0.7;
        }
        </style>
            <div class="card">
                <img src="" alt="bike x" style="width:100%; height: 224px">
                <h5 id="bike"></h5>
                <p id="price" class="price"></p>
                <p id="stock"></p>
                <p>
                    <button id="rent" class="rent">rent 💵</button>
                    <button id="detail" class="detail">detail 🔎</button>
                </p>
            </div>
        `;
        
        this._rentingModal = document.querySelector('jn-availability-rent-modal');
        this._detailModal = document.querySelector('jn-availability-detail-modal'); 
    }

    connectedCallback() {
        this._init();
        this._registerListeners();
    }

    _init() {
        // SET INITIAL DATA
        this.shadowRoot.querySelector('img').src = this._availability.bike.image;
        this.shadowRoot.getElementById('bike').textContent = `${this._availability.bike.brand} ${this._availability.bike.model}`;
        this.shadowRoot.getElementById('price').textContent = `${this._availability.bike.msrp}`;
        this.shadowRoot.getElementById('stock').textContent = `${this._availability.in_stock} in stock`;

        // INIT BUTTONS
        this._rentButton = this.shadowRoot.querySelector('#rent');
        this._detailButton = this.shadowRoot.querySelector('#detail');
    }

    _registerListeners() {
        this._rentButton.addEventListener('click', this._rent.bind(this));
        this._detailButton.addEventListener('click', this._detail.bind(this));
    }

    // DISPATCH RENT BUTTON
    _rent() {
        this._rentingModal.open();
        this._rentingModal.setAvailability(this._availability);
    }

    // DISPATCH DETAIL BUTTON   
    _detail() {
        this._detailModal.open();
    }

    downGradeStock() {
        // web components the react way...fun jejej
        console.log('downgrading stock...');
    }
}

customElements.define('jn-availability-card', AvailabilityCard);