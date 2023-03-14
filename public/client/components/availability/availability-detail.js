class AvailabilityDetail extends Modal {
    constructor() {
        super();
        this._containerRoot;
        this._availability;
        this.isOpen = false;
        this.attachShadow({ mode: 'open'});
        this.shadowRoot.innerHTML = `
          <style>
              #modal-container {
                opacity: 0;  /* not visible by default */
                pointer-events: none;  /* do not accept any clicks */
                overflow: scroll;
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
                overflow-y: scroll;
                overflow-x: scroll;
                height: 80vh;
              }
    
              header {
                padding: 1rem;
              }
    
              #main {
                padding: 1rem;
                display: flex;
                justify-content: space-between;
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
                <section id="main">
                  <div>
                    <h3>Bike</h3>
                    <ul>
                      <li>msrp: null</li>
                      <li>category: null</li>
                      <li>brand: null</li>
                      <li>model: null</li>
                      <li>weight: null</li>
                      <li>suspension: null</li>
                      <li>travel: null</li>
                      <li>frame: null</li>
                      <li>fork: null</li>
                      <li>wheels: null</li>
                      <li>drive train: null</li>
                      <li>groupset: null</li>
                      <li>brakes: null</li>
                      <li>seatpost: null</li>
                    </ul>
                  </div>
                  <div>
                    <h3>Shop</h3>
                    <ul>
                      <li>name: null</li>
                      <li>location: null</li>
                      <li>phone number: null</li>
                      <li>hours: null</li>
                      <li>services: null</li>
                    </ul>
                  </div>
                </section>
                <section id="actions">
                  <button id="close-btn">Close</button>
                </section>
            </div>
          </div>
        `

        // REGISTER EVENT LISTENERS
        const listeners = [
          {
              id: 'close-btn',
              type: 'click',
              handler: this._close
          },
          {
            id: 'backdrop',
            type: 'click',
            handler: this._close
          }
      ];

      super._registerEventListeners(listeners);
      }
    
      init(availability) {
        this._availability = availability;
        this.shadowRoot.getElementById('modal').scroll(0, 0);
        this._renderDetails();
      }

      _renderDetails() {

      }

      _close() {
        this.hide();
      }
}

customElements.define('jn-availability-detail-modal', AvailabilityDetail);