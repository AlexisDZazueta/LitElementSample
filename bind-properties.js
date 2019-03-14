/**
 * Import the LitElement base class and html helper function.
 */
import {LitElement, html} from 'lit-element';
/**
 * Component that bind properties to child elements.
 */
class BindProperties extends LitElement {
  /**
   * Declare the properties.
   */
  static get properties() {
    return {
      prop1: {type: String},
      prop2: {type: String},
      prop3: {type: Boolean},
      prop4: {type: String},
    };
  }
  /**
   * Construct the component
   */
  constructor() {
    super();
    this.prop1 = 'Text binding';
    this.prop2 = 'mydiv';
    this.prop3 = true;
    this.prop4 = 'pie';
  }
  /**
   * Render the component content
   * @return {TemplateResult} The HTML TemplateResult
   */
  render() {
    return html`
      <!-- Text binding -->
      <div>${this.prop1}</div>
      <!-- Attribute binding -->
      <div id="${this.prop2}">Attribute binding</div>
      <!-- Boolean attribute binding -->
      <div >
        Boolean attribute binding
        <input type="checkbox" ?checked="${this.prop3}"/>
      </div>
      <!-- Property binding -->
      <div >
        Property binding
        <input type="text" .value="${this.prop4}"/>
      </div>
      <!-- Event handler binding -->
      <div >
        Event handler binding
        <button @click="${this.clickHandler}">Click</button>
      </div>
    `;
  }
  /**
   * Handler click event
   * @param {Event} e
   */
  clickHandler(e) {
    console.log(e.target);
  }
}

customElements.define('bind-properties', BindProperties);
