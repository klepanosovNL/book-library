import { DivComponent } from "../../common/div-component.js";
import "./card-list.css";

export class CardList extends DivComponent {
  constructor(appState, parentState) {
    super();

    this.appState = appState;
    this.parentState = parentState;
  }

  render() {
    if (this.parentState.loading) {
      this.el.innerHTML = `<div class="card_list__holder">Loading...</div>`;

      return this.el;
    }

    this.el.classList.add("card_list");
    this.el.innerHTML = `
        <h1>We found ${this.parentState.list.length} books <h1>
    `;

    return this.el;
  }
}
