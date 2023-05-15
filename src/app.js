import { MainView } from "./views/main/main.js";
import { FavoriteView } from "./views/favorites/favorites.js";

class App {
  routes = [
    {
      path: "",
      view: MainView,
    },
    {
      path: "#favorites",
      view: FavoriteView,
    },
  ];
  appState = {
    favorites: [],
  };

  constructor() {
    window.addEventListener("hashchange", this.route.bind(this));
    this.route();
  }

  route() {
    if (this.currentView) {
      this.currentView.destroy();
    }

    const View = this.routes.find((r) => r.path === location.hash).view;
    this.currentView = new View(this.appState);
    this.currentView.render();
  }
}

new App();
