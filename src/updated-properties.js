/**
 * Import the LitElement base class and html helper function.
 */
import {LitElement, html} from 'lit-element';
/**
 * Sample component to change properties.
 */
class UpdatedProperties extends LitElement {
  /**
   * Declare the properties.
   */
  static get properties() {
    return {
      message: String,
    };
  }
  /**
   * Construct the component.
   */
  constructor() {
    super();
    this.message = 'Loading';
    this.addEventListener('stuff-loaded', (e) => {
      this.message = e.detail;
    });
    this.loadStuff();
  }
  /**
   * Render the component
   * @return {TemplateResult} The HTML Template Result.
   */
  render() {
    return html`
      <p>${this.message}</p>
    `;
  }
  /**
   * A CustomEvent to set the `this.message` content.
   */
  loadStuff() {
    setInterval(() => {
      const loaded = new CustomEvent('stuff-loaded', {
        detail: 'Loading Complete',
      });
      this.dispatchEvent(loaded);
    }, 3000);
  }
}

customElements.define('updated-properties', UpdatedProperties);
