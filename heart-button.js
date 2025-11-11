class HeartButton extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .heart-btn {
          background: none;
          border: none;
          cursor: pointer;
          transition: transform 0.3s;
        }
        .heart-btn:hover {
          transform: scale(1.2);
        }
        .heart-icon {
          color: #ff1493;
          width: 24px;
          height: 24px;
        }
      </style>
      <button class="heart-btn">
        <i data-feather="heart" class="heart-icon"></i>
      </button>
    `;
  }
}

customElements.define('heart-button', HeartButton);