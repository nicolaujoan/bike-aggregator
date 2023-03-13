class AvailabilityRent extends Modal {
    constructor() {
        super();
        this._availability;
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
          <style>
              #modal-container {
                opacity: 0;  /* not visible by default */
                pointer-events: none;  /* do not accept any clicks */
              }
    
              #backdrop {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100vh;
                background: rgba(0, 0, 0, 0.75);
                z-index: 10;
              }
    
              #modal {
                position: fixed;
                top: 15vh;
                left: 25%;
                width: 50%;
                z-index: 100;
                background-color: white;
                border-radius: 3px;
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
                display: flex;
                flex-direction: column;
                justify-content: space-between;
              }
    
              header {
                padding: 1rem;
              }
    
              #main {
                padding: 1rem;
              }

              .date-container {
                display: flex;
                justify-content: space-around;
              }
    
              #actions {
                border-top: 1px solid #ccc;
                padding: 1rem;
                display: flex;
                justify-content: flex-end;  
              }
    
              #actions button {
                margin: 0 0.25rem; /* left and right */
              }
    
          </style>
          <div id="modal-container">
            <div id="backdrop"></div>
            <div id="modal">
                <header>
                    <h3>Renting modal</h3>
                </header>
                <section id="main" class="date-container">
                    <div>
                    <label for="start">Start date:</label>
                        <input type="date" id="start" name="rent-start"
                        value="2018-07-22"
                        min="2018-01-01" max="2018-12-31">
                    </div>
                    <div>
                        <label for="end">End date:</label>
                        <input type="date" id="end" name="rent-end"
                        value="2018-07-22"
                        min="2018-01-01" max="2018-12-31">
                    </div>
                </section>
                <section id="actions">
                  <button id="confirm-btn">Rent</button>
                  <button id="cancel-btn">Cancel</button>
                </section>
            </div>
          </div>
        `

        // REGISTER EVENT LISTENERS
        const listeners = [
            {
                id: 'confirm-btn',
                type: 'click',
                handler: this._confirm
            },
            {
                id: 'cancel-btn',
                type: 'click',
                handler: this._cancel
            }
        ];

        super._registerEventListeners(listeners);
    }

    setAvailability(availability) {
        this._availability = availability;
    }

    _cancel(event) {
        this.hide();
        // Dispatched from shadowDOM, bubbled(can be listened from another nodes) and composed(escape shadow DOM)
        // so another component can listen for it and do something with it
        const cancelEvent = new Event('cancel', { bubbles: true, composed: true });
        event.target.dispatchEvent(cancelEvent);
    }

    _confirm(event) {
        this.hide();
        // dispatched from the modal itself (with 'this'), so is not considered shadow DOM, can not escape it
        const rentEvent = new Event('rent', { bubbles: true, composed: true });
        rentEvent.availability = this._availability;
        event.target.dispatchEvent(rentEvent);
    }
}

customElements.define('jn-availability-rent-modal', AvailabilityRent);