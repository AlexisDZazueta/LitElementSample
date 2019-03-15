/**
 * Import the LitElement base class and html helper function
 */
import {LitElement, html} from 'lit-element';
/**
 * Component that uses named slots
 */
class NamedSlots extends LitElement {
  /**
   * Render the component content
   * @return {TemplateResult} The HTML TemplateResult
   */
  render() {
    return html`
      <div>
        <slot name="one"></slot>
      </div>
    `;
  }
}

customElements.define('named-slots', NamedSlots);
