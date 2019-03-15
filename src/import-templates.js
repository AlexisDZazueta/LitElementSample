/**
 * Import LitElement base class, html hepler function, and the other components.
 */
import {LitElement, html} from 'lit-element';
import './my-element';
import './updated-properties';
import './loop-condition';
import './bind-properties';
import './light-dom';
import './named-slots';
import './template-templates';
/**
 * Component that imports components.
 */
class ImportTemplates extends LitElement {
  /**
   * Render the component content.
   * @return {TemplateResult} The HTML TemplateResult.
   */
  render() {
    return html`
      <my-element></my-element>
      <updated-properties></updated-properties>
      <loop-condition></loop-condition>
      <bind-properties></bind-properties>
      <light-dom>
        <p>Render me</p>
      </light-dom>
      <named-slots>
        <p slot="one">Render</p>
        <p>Not Render</p>
      </named-slots>
      <template-templates></template-templates>
    `;
  }
}

customElements.define('import-templates', ImportTemplates);
