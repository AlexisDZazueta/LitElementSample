/**
 * Import the LitElement base class and html helper function.
 */
import {LitElement, html} from 'lit-element';
/**
 * Component that allow the LightDOM rendering.
 */
class LightDom extends LitElement {
  /**
   * Render the component content.
   * @return {TemplateResult} The HTML Template Result
   */
  render() {
    return html`
      <div>
        <slot></slot>
      </div>
    `;
  }
}

customElements.define('light-dom', LightDom);
