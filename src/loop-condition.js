/**
 * Import the LitElement base class and html helper function.
 */
import {LitElement, html} from 'lit-element';
/**
 * Component that contains a loop and a condition
 */
class LoopCondition extends LitElement {
  /**
   * Declare the properties.
   */
  static get properties() {
    return {
      myString: {type: String},
      myArray: {type: Array},
      myBool: {type: Boolean},
    };
  }
  /**
   * Construc the component
   */
  constructor() {
    super();
    this.myString = 'Hello World';
    this.myArray = ['An', 'array', 'of', 'test', 'data'];
    this.myBool = true;
  }
  /**
   * Render the content of component
   * @return {TemplateResult} The HTML Template Result
   */
  render() {
    return html`
      <p>${this.myString}</p>
      <ul>
        ${this.myArray.map((i) => html`<li>${i}</li>`)}
      </ul>
      ${this.myBool?
        html`<p>Render some HTML if myBool is true</p>`:
        html`<p>Render some other HTML if myBool is false</p>`}
    `;
  }
}

customElements.define('loop-condition', LoopCondition);
