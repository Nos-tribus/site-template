App.modules["navbar"] = (() => {
  return {
    start() {
      document
        .querySelectorAll('[data-action="toggle-menu"]')
        .forEach((element) => element.addEventListener("click", () => {
          const menu = document.documentElement.dataset.menu;
          if (menu) {
            delete document.documentElement.dataset.menu;
          }
          else {
            document.documentElement.dataset.menu = true;
          }
        }));
    },
  };
})();
