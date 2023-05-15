import { DivComponent } from "../../common/div-component.js";
import "./card.css";

export class Card extends DivComponent {
  constructor(appState, cardState) {
    super();

    this.appState = appState;
    this.cardState = cardState;
  }

  #addToFavorites() {
    this.appState.favorites.push(this.cardState);
  }

  #deleteFromFavorites() {
    this.appState.favorites = this.appState.favorites.filter(
      (book) => book.key !== this.cardState.key
    );
  }

  render() {
    this.el.classList.add("card");
    const isExistInFavorites = this.appState.favorites.find(
      (b) => this.cardState.key === b.key
    );

    this.el.innerHTML = `
        <div class=card__image>
            <img src="https://covers.openlibrary.org/b/olid/${
              this.cardState.cover_edition_key
                ? this.cardState.cover_edition_key
                : "OL7440033M"
            }-M.jpg" alt="image" />
        </div>
        <div class="card__info">
            <div class="card__tag">
                ${
                  this.cardState.subject
                    ? this.cardState.subject[0]
                    : "not found"
                }
            </div>
            <div class="card__name">
                ${this.cardState.title}
            </div>
            <div class="card__author">
                ${
                  this.cardState.author_name
                    ? this.cardState.author_name[0]
                    : "not found"
                }
            </div>
            <div class="card__footer">
                <button class="button__add ${
                  isExistInFavorites ? "button--active" : ""
                }">
                ${
                  isExistInFavorites
                    ? '<img src="../../../static/favorite-black.svg" alt="image"/>'
                    : '<img src="../../../static/favorite-white.svg" alt="image"/>'
                }
                </button>
            </div>
        </div>
    `;

    if (isExistInFavorites) {
      this.el
        .querySelector("button")
        .addEventListener("click", this.#deleteFromFavorites.bind(this));
    } else {
      this.el
        .querySelector("button")
        .addEventListener("click", this.#addToFavorites.bind(this));
    }

    return this.el;
  }
}
