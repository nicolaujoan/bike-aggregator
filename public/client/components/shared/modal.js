class Modal extends HTMLElement {
  constructor() {
    super();
    this._containerRoot;
    this.isOpen = false;
  }

  connectedCallback() {
    this._containerRoot = this.shadowRoot.getElementById('modal-container');
  }

  _registerEventListeners(listeners) {
    listeners.forEach(listener => {
      const target = this.shadowRoot.getElementById(listener.id);
      target.addEventListener(listener.type, listener.handler.bind(this))
    });
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
}

customElements.define('jn-modal', Modal);