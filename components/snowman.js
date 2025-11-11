class SnowmanElement extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .snowman {
          width: 150px;
          height: 200px;
          position: relative;
          margin: 0 auto;
        }
        .snowball {
          display: block;
          margin: 0 auto;
          position: relative;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          background: white;
        }
        .big {
          width: 120px;
          height: 120px;
          border-radius: 50%;
        }
        .medium {
          width: 90px;
          height: 90px;
          border-radius: 50%;
          margin-top: -10px;
        }
        .small {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          margin-top: -5px;
        }
        .eyes {
          position: absolute;
          top: 30px;
          left: 20px;
        }
        .eye {
          width: 10px;
          height: 10px;
          background: black;
          border-radius: 50%;
          display: inline-block;
          margin: 0 5px;
        }
        .carrot {
          position: absolute;
          top: 35px;
          right: 5px;
          width: 0;
          height: 0;
          border-left: 10px solid transparent;
          border-right: 10px solid transparent;
          border-bottom: 20px solid orange;
          transform: rotate(45deg);
        }
        .hat {
          position: absolute;
          top: -5px;
          left: 15px;
          width: 90px;
          height: 20px;
          background: black;
        }
        .hat-brim {
          position: absolute;
          top: -10px;
          left: 0;
          width: 120px;
          height: 10px;
          background: black;
        }
        .buttons {
          position: absolute;
          top: 70px;
          left: 45px;
        }
        .button {
          width: 15px;
          height: 15px;
          background: black;
          border-radius: 50%;
          margin-bottom: 5px;
        }
      </style>
      <div class="snowman">
        <div class="snowball big"></div>
        <div class="snowball medium"></div>
        <div class="snowball small"></div>
        <div class="eyes">
          <div class="eye"></div>
          <div class="eye"></div>
        </div>
        <div class="carrot"></div>
        <div class="buttons">
          <div class="button"></div>
          <div class="button"></div>
          <div class="button"></div>
        </div>
        <div class="hat"></div>
        <div class="hat-brim"></div>
      </div>
    `;
  }
}

customElements.define('snowman-element', SnowmanElement);