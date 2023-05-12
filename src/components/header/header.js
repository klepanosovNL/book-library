import { DivComponent } from "../../common/div-component.js";
import "./header.css";

export class Header extends DivComponent {
  constructor(appState) {
    super();

    this.appState = appState;
  }

  render() {
    this.el.classList.add("header");
    this.el.innerHTML = `
        <img src="../../../static/logo.svg" alt="logo" />
        <div class="menu">
            <a class="menu__item" href="#">
                <img src="../../../static/search.svg" alt="search">
                Find a book
            </a>
            <a class="menu__item" href="#">
                <img src="../../../static/favorites.svg" alt="current">
                Selected
                <div class="menu__counter">${this.appState.favorites.length}</div>
            </a>
        </div>
   `;

    return this.el;
  }
}
