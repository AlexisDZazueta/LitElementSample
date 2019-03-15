/**
 * Import LitElement base class and html helper function
 */
import {LitElement, html} from 'lit-element';
/**
 * Component that has a custom render root
 */
class CustomRoot extends LitElement {
  /**
   * Render the component content
   * @return {TemplateResult} The HTML Template Result
   */
  render() {
    return html`
      <p>This template renders in LightDOM</p>
    `;
  }
  /**
   * Returns the node into which the element should render
   * @return {HTMLElement} The node that will be the parent.
   */
  createRenderRoot() {
    return this;
  }
}

customElements.define('custom-root', CustomRoot);
