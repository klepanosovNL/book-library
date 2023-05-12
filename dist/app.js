(function () {
  'use strict';

  class AbstractView {
    constructor() {
      this.app = document.getElementById("root");
    }

    setTitle(title) {
      document.title = title;
    }

    render() {

    }

    destroy() {

    }
  }

  class MainView extends AbstractView {
    constructor() {
      super();

      this.setTitle("Book search");
    }

    render() {
      const main = document.createElement("div");
      main.innerHTML = "test";
      this.app.innerHTML = "";
      this.app.append(main);
    }
  }

  class App {
    routes = [
      {
        path: "",
        view: MainView,
      },
    ];

    constructor() {
      window.addEventListener("hashchange", this.route.bind(this));
      this.route();
    }

    route() {
      if (this.currentView) {
        this.currentView.destroy();
      }

      const View = this.routes.find((r) => r.path === location.hash).view;
      this.currentView = new View();
      this.currentView.render();
    }
  }

  new App();

})();
