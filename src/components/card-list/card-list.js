import { DivComponent } from "../../common/div-component.js";
import "./card-list.css";
import { Card } from "../card/card.js";

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

    const cardsContainer = document.createElement("div");
    cardsContainer.classList.add("card__container");
    this.el.append(cardsContainer);

    for (const card of this.parentState.list) {
      cardsContainer.append(new Card(this.appState, card).render());
    }

    return this.el;
  }
}
