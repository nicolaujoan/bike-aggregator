class AvailabilityDetail extends HTMLElement {
    constructor() {
        super();
        this._containerRoot;
        this._data;
        this.isOpen = false;
        this.attachShadow({ mode: 'open'});
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
    
              ::slotted(*) {
              }
    
              ::slotted(h1){
                color: red;
              }
    
              #main {
                padding: 1rem;
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
                <h3>Modal detail</h3>
                </header>
                <section id="main">
                </section>
                <section id="actions">
                  <button id="confirm-btn">Okay</button>
                  <button id="cancel-btn">Cancel</button>
                </section>
            </div>
          </div>
        `
      }
    
      connectedCallback() {
        this._containerRoot = this.shadowRoot.getElementById('modal-container');
        this._registerEventListeners();
      }
    
      _registerEventListeners() {
        const confirmButton = this.shadowRoot.getElementById('confirm-btn');
        const cancelButton = this.shadowRoot.getElementById('cancel-btn');
        const backdrop = this.shadowRoot.getElementById('backdrop');
    
        // the bind is important to bind the listener to the object that is triggered and not to the button
        cancelButton.addEventListener('click', this._cancel.bind(this));
        confirmButton.addEventListener('click', this._confirm.bind(this));
        backdrop.addEventListener('click', this._cancel.bind(this));
      }
    
      static get observedAttributes() {
        return ['opened'];
      }
    
      open() {
        this.setAttribute('opened', '');
      }
    
      attributeChangedCallback(name, oldValue, newValue) {
        if (this.hasAttribute('opened')) {
          this.isOpen = true;
          this._showModal();
        } else {
          this.isOpen = false;
          this._hideModal();
        }
      }
    
      _showModal() {
        this._containerRoot.style.opacity = 1;
        this._containerRoot.style.pointerEvents = 'all';
      }
    
      _hideModal() {
        this._containerRoot.style.opacity = 0;
        this._containerRoot.style.pointerEvents = 'none';
      }
    
      hide() {
        if (this.hasAttribute('opened')) {
          this.removeAttribute('opened');
        }
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
        // dispatched from the modal itself, so is not considered shadow DOM, can not escape it
        const confirmEvent = new Event('confirm');
        this.dispatchEvent(confirmEvent);

        // all the logic of a modal could be nice to extend it in some way |^|

        // BUSINESS LOGIC

      }
}

customElements.define('jn-availability-detail-modal', AvailabilityDetail);