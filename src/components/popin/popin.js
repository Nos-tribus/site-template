App.modules['popin'] = (() => {
  return {
      start() {
        document.querySelector('.affiches').addEventListener('click', (e) => {
          const button  = e.target.closest('button[data-film-id]');
          if(!button) return;

          const dialog = document.querySelector(`.popin[data-film-id="${button.dataset.filmId}"]`);
          dialog.classList.remove('go');
          dialog.showModal();
            setTimeout(() => {
            dialog.classList.add('go');
          }, 100);
          dialog.addEventListener("click", (event) => {
            if (event.target === dialog) {
                dialog.close(); // Ferme le modal si on clique sur le backdrop
            }
          });
        });
      }
  }
})();