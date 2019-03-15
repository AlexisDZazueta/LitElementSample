/**
 * Import LitElement base class and html helper function.
 */
import {LitElement, html} from 'lit-element';
/**
 * Component that make a template of templates.
 */
class TemplateTemplates extends LitElement {
  /**
   * Render the component content.
   * @return {TemplateResult} The HTML TemplateResult.
   */
  render() {
    return html`
      ${this.headerTemplate}
      ${this.articleTemplate}
      ${this.footerTemplate}
    `;
  }
  /**
   * Get the header template.
   * @return {TemplateResult} The HTML Template Result
   */
  get headerTemplate() {
    return html`<header>header</header>`;
  }
  /**
   * Get the article template.
   * @return {TemplateResult} The HTML Template Result
   */
  get articleTemplate() {
    return html`<article>article</article>`;
  }
  /**
   * Get the footer template.
   * @return {TemplateResult} The HTML Template Result
   */
  get footerTemplate() {
    return html`<footer>footer</footer>`;
  }
}

customElements.define('template-templates', TemplateTemplates);
